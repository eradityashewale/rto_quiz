import { TicketStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export type TicketMessageDto = {
  id: string;
  body: string;
  attachments: string[];
  senderId: string;
  senderName: string;
  senderRole: string;
  createdAt: string;
};

export type TicketDto = {
  id: string;
  subject: string;
  status: TicketStatus;
  createdAt: string;
  updatedAt: string;
  userId: string;
  userName: string;
  userEmail: string;
  messages: TicketMessageDto[];
};

export type TicketSummaryDto = {
  id: string;
  subject: string;
  status: TicketStatus;
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
}): TicketMessageDto {
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

export async function createTicket(
  userId: string,
  subject: string,
  message: string,
  attachments: string[] = []
): Promise<TicketDto> {
  const ticket = await prisma.ticket.create({
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
    id: ticket.id,
    subject: ticket.subject,
    status: ticket.status,
    createdAt: ticket.createdAt.toISOString(),
    updatedAt: ticket.updatedAt.toISOString(),
    userId: ticket.userId,
    userName: ticket.user.name,
    userEmail: ticket.user.email,
    messages: ticket.messages.map(toMessageDto),
  };
}

export async function listUserTickets(userId: string): Promise<TicketSummaryDto[]> {
  const tickets = await prisma.ticket.findMany({
    where: { userId },
    orderBy: { updatedAt: "desc" },
    include: {
      user: { select: { name: true } },
      messages: { orderBy: { createdAt: "desc" }, take: 1 },
      _count: { select: { messages: true } },
    },
  });

  return tickets.map((t) => ({
    id: t.id,
    subject: t.subject,
    status: t.status,
    createdAt: t.createdAt.toISOString(),
    updatedAt: t.updatedAt.toISOString(),
    userId: t.userId,
    userName: t.user.name,
    lastMessage: t.messages[0]?.body ?? "",
    messageCount: t._count.messages,
  }));
}

export async function getUserTicket(userId: string, ticketId: string): Promise<TicketDto | null> {
  const ticket = await prisma.ticket.findUnique({
    where: { id: ticketId },
    include: {
      user: { select: { name: true, email: true } },
      messages: { include: { sender: { select: { name: true, role: true } } }, orderBy: { createdAt: "asc" } },
    },
  });

  if (!ticket || ticket.userId !== userId) return null;

  return {
    id: ticket.id,
    subject: ticket.subject,
    status: ticket.status,
    createdAt: ticket.createdAt.toISOString(),
    updatedAt: ticket.updatedAt.toISOString(),
    userId: ticket.userId,
    userName: ticket.user.name,
    userEmail: ticket.user.email,
    messages: ticket.messages.map(toMessageDto),
  };
}

export async function addUserMessage(
  userId: string,
  ticketId: string,
  body: string,
  attachments: string[] = []
): Promise<TicketDto | null> {
  const existing = await prisma.ticket.findUnique({ where: { id: ticketId }, select: { userId: true, status: true } });
  if (!existing || existing.userId !== userId || existing.status === "CLOSED") return null;

  await prisma.$transaction([
    prisma.ticketMessage.create({ data: { ticketId, senderId: userId, body, attachments } }),
    prisma.ticket.update({ where: { id: ticketId }, data: { status: TicketStatus.OPEN } }),
  ]);

  return getUserTicket(userId, ticketId);
}

export async function listAllTickets(status?: TicketStatus): Promise<TicketSummaryDto[]> {
  const tickets = await prisma.ticket.findMany({
    where: status ? { status } : undefined,
    orderBy: { updatedAt: "desc" },
    include: {
      user: { select: { name: true } },
      messages: { orderBy: { createdAt: "desc" }, take: 1 },
      _count: { select: { messages: true } },
    },
  });

  return tickets.map((t) => ({
    id: t.id,
    subject: t.subject,
    status: t.status,
    createdAt: t.createdAt.toISOString(),
    updatedAt: t.updatedAt.toISOString(),
    userId: t.userId,
    userName: t.user.name,
    lastMessage: t.messages[0]?.body ?? "",
    messageCount: t._count.messages,
  }));
}

export async function getTicketForAdmin(ticketId: string): Promise<TicketDto | null> {
  const ticket = await prisma.ticket.findUnique({
    where: { id: ticketId },
    include: {
      user: { select: { name: true, email: true } },
      messages: { include: { sender: { select: { name: true, role: true } } }, orderBy: { createdAt: "asc" } },
    },
  });

  if (!ticket) return null;

  return {
    id: ticket.id,
    subject: ticket.subject,
    status: ticket.status,
    createdAt: ticket.createdAt.toISOString(),
    updatedAt: ticket.updatedAt.toISOString(),
    userId: ticket.userId,
    userName: ticket.user.name,
    userEmail: ticket.user.email,
    messages: ticket.messages.map(toMessageDto),
  };
}

export async function addAdminReply(
  adminId: string,
  ticketId: string,
  body: string,
  attachments: string[] = []
): Promise<TicketDto | null> {
  const existing = await prisma.ticket.findUnique({ where: { id: ticketId }, select: { id: true } });
  if (!existing) return null;

  await prisma.$transaction([
    prisma.ticketMessage.create({ data: { ticketId, senderId: adminId, body, attachments } }),
    prisma.ticket.update({ where: { id: ticketId }, data: { status: TicketStatus.ANSWERED } }),
  ]);

  return getTicketForAdmin(ticketId);
}

export async function updateTicketStatus(ticketId: string, status: TicketStatus): Promise<TicketDto | null> {
  const existing = await prisma.ticket.findUnique({ where: { id: ticketId }, select: { id: true } });
  if (!existing) return null;

  await prisma.ticket.update({ where: { id: ticketId }, data: { status } });
  return getTicketForAdmin(ticketId);
}
