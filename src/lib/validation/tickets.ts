import { z } from "zod";

export const MAX_TICKET_ATTACHMENTS = 3;
export const MAX_TICKET_ATTACHMENT_BYTES = 2 * 1024 * 1024; // 2MB decoded per image
const ALLOWED_IMAGE_TYPES = ["png", "jpeg", "jpg", "webp", "gif"];
const DATA_URL_PATTERN = new RegExp(`^data:image/(${ALLOWED_IMAGE_TYPES.join("|")});base64,`);

const attachmentSchema = z
  .string()
  .refine((val) => DATA_URL_PATTERN.test(val), { message: "Only image attachments are allowed" })
  .refine(
    (val) => {
      const base64 = val.slice(val.indexOf(",") + 1);
      const bytes = Math.ceil((base64.length * 3) / 4);
      return bytes <= MAX_TICKET_ATTACHMENT_BYTES;
    },
    { message: "Image is too large (max 2MB)" }
  );

const attachmentsSchema = z.array(attachmentSchema).max(MAX_TICKET_ATTACHMENTS).optional().default([]);

export const createTicketSchema = z
  .object({
    subject: z.string().trim().min(3).max(150),
    message: z.string().trim().max(4000).default(""),
    attachments: attachmentsSchema,
  })
  .refine((data) => data.message.length > 0 || data.attachments.length > 0, {
    message: "Message or attachment is required",
    path: ["message"],
  });

export const addTicketMessageSchema = z
  .object({
    body: z.string().trim().max(4000).default(""),
    attachments: attachmentsSchema,
  })
  .refine((data) => data.body.length > 0 || data.attachments.length > 0, {
    message: "Message or attachment is required",
    path: ["body"],
  });

export const updateTicketStatusSchema = z.object({
  status: z.enum(["OPEN", "ANSWERED", "CLOSED"]),
});

export type CreateTicketInput = z.infer<typeof createTicketSchema>;
export type AddTicketMessageInput = z.infer<typeof addTicketMessageSchema>;
export type UpdateTicketStatusInput = z.infer<typeof updateTicketStatusSchema>;
