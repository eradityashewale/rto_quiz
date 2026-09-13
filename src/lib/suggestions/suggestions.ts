import { SuggestionStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export type SuggestionMessageDto = {
  id: string;
  body: string;
  attachments: string[];
  senderId: string;
  senderName: string;
  senderRole: string;
  createdAt: string;
};

export type SuggestionDto = {
  id: string;
  subject: string;
  status: SuggestionStatus;
  createdAt: string;
  updatedAt: string;
  userId: string;
  userName: string;
  userEmail: string;
  messages: SuggestionMessageDto[];
};

export type SuggestionSummaryDto = {
  id: string;
  subject: string;
  status: SuggestionStatus;
  createdAt: string;
  updatedAt: string;
  userId: string;
  userName: string;
  lastMessage: string;
  messageCount: number;
};

function toMessageDto(m: {
  id: string;
  body: string;
  attachments: string[];
  senderId: string;
  createdAt: Date;
  sender: { name: string; role: string };
}): SuggestionMessageDto {
  return {
    id: m.id,
    body: m.body,
    attachments: m.attachments,
    senderId: m.senderId,
    senderName: m.sender.name,
    senderRole: m.sender.role,
    createdAt: m.createdAt.toISOString(),
  };
}

export async function createSuggestion(
  userId: string,
  subject: string,
  message: string,
  attachments: string[] = []
): Promise<SuggestionDto> {
  const suggestion = await prisma.suggestion.create({
    data: {
      userId,
      subject,
      messages: { create: { senderId: userId, body: message, attachments } },
    },
    include: {
      user: { select: { name: true, email: true } },
      messages: { include: { sender: { select: { name: true, role: true } } }, orderBy: { createdAt: "asc" } },
    },
  });

  return {
    id: suggestion.id,
    subject: suggestion.subject,
    status: suggestion.status,
    createdAt: suggestion.createdAt.toISOString(),
    updatedAt: suggestion.updatedAt.toISOString(),
    userId: suggestion.userId,
    userName: suggestion.user.name,
    userEmail: suggestion.user.email,
    messages: suggestion.messages.map(toMessageDto),
  };
}

export async function listUserSuggestions(userId: string): Promise<SuggestionSummaryDto[]> {
  const suggestions = await prisma.suggestion.findMany({
    where: { userId },
    orderBy: { updatedAt: "desc" },
    include: {
      user: { select: { name: true } },
      messages: { orderBy: { createdAt: "desc" }, take: 1 },
      _count: { select: { messages: true } },
    },
  });

  return suggestions.map((s) => ({
    id: s.id,
    subject: s.subject,
    status: s.status,
    createdAt: s.createdAt.toISOString(),
    updatedAt: s.updatedAt.toISOString(),
    userId: s.userId,
    userName: s.user.name,
    lastMessage: s.messages[0]?.body ?? "",
    messageCount: s._count.messages,
  }));
}

export async function getUserSuggestion(userId: string, suggestionId: string): Promise<SuggestionDto | null> {
  const suggestion = await prisma.suggestion.findUnique({
    where: { id: suggestionId },
    include: {
      user: { select: { name: true, email: true } },
      messages: { include: { sender: { select: { name: true, role: true } } }, orderBy: { createdAt: "asc" } },
    },
  });

  if (!suggestion || suggestion.userId !== userId) return null;

  return {
    id: suggestion.id,
    subject: suggestion.subject,
    status: suggestion.status,
    createdAt: suggestion.createdAt.toISOString(),
    updatedAt: suggestion.updatedAt.toISOString(),
    userId: suggestion.userId,
    userName: suggestion.user.name,
    userEmail: suggestion.user.email,
    messages: suggestion.messages.map(toMessageDto),
  };
}

export async function addUserMessage(
  userId: string,
  suggestionId: string,
  body: string,
  attachments: string[] = []
): Promise<SuggestionDto | null> {
  const existing = await prisma.suggestion.findUnique({
    where: { id: suggestionId },
    select: { userId: true, status: true },
  });
  if (!existing || existing.userId !== userId || existing.status === "CLOSED") return null;

  await prisma.$transaction([
    prisma.suggestionMessage.create({ data: { suggestionId, senderId: userId, body, attachments } }),
    prisma.suggestion.update({ where: { id: suggestionId }, data: { status: SuggestionStatus.OPEN } }),
  ]);

  return getUserSuggestion(userId, suggestionId);
}

export async function listAllSuggestions(status?: SuggestionStatus): Promise<SuggestionSummaryDto[]> {
  const suggestions = await prisma.suggestion.findMany({
    where: status ? { status } : undefined,
    orderBy: { updatedAt: "desc" },
    include: {
      user: { select: { name: true } },
      messages: { orderBy: { createdAt: "desc" }, take: 1 },
      _count: { select: { messages: true } },
    },
  });

  return suggestions.map((s) => ({
    id: s.id,
    subject: s.subject,
    status: s.status,
    createdAt: s.createdAt.toISOString(),
    updatedAt: s.updatedAt.toISOString(),
    userId: s.userId,
    userName: s.user.name,
    lastMessage: s.messages[0]?.body ?? "",
    messageCount: s._count.messages,
  }));
}

export async function getSuggestionForAdmin(suggestionId: string): Promise<SuggestionDto | null> {
  const suggestion = await prisma.suggestion.findUnique({
    where: { id: suggestionId },
    include: {
      user: { select: { name: true, email: true } },
      messages: { include: { sender: { select: { name: true, role: true } } }, orderBy: { createdAt: "asc" } },
    },
  });

  if (!suggestion) return null;

  return {
    id: suggestion.id,
    subject: suggestion.subject,
    status: suggestion.status,
    createdAt: suggestion.createdAt.toISOString(),
    updatedAt: suggestion.updatedAt.toISOString(),
    userId: suggestion.userId,
    userName: suggestion.user.name,
    userEmail: suggestion.user.email,
    messages: suggestion.messages.map(toMessageDto),
  };
}

export async function addAdminReply(
  adminId: string,
  suggestionId: string,
  body: string,
  attachments: string[] = []
): Promise<SuggestionDto | null> {
  const existing = await prisma.suggestion.findUnique({ where: { id: suggestionId }, select: { id: true } });
  if (!existing) return null;

  await prisma.$transaction([
    prisma.suggestionMessage.create({ data: { suggestionId, senderId: adminId, body, attachments } }),
    prisma.suggestion.update({ where: { id: suggestionId }, data: { status: SuggestionStatus.REVIEWED } }),
  ]);

  return getSuggestionForAdmin(suggestionId);
}

export async function updateSuggestionStatus(
  suggestionId: string,
  status: SuggestionStatus
): Promise<SuggestionDto | null> {
  const existing = await prisma.suggestion.findUnique({ where: { id: suggestionId }, select: { id: true } });
  if (!existing) return null;

  await prisma.suggestion.update({ where: { id: suggestionId }, data: { status } });
  return getSuggestionForAdmin(suggestionId);
}
