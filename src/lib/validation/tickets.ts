import { z } from "zod";

export const createTicketSchema = z.object({
  subject: z.string().trim().min(3).max(150),
  message: z.string().trim().min(1).max(4000),
});

export const addTicketMessageSchema = z.object({
  body: z.string().trim().min(1).max(4000),
});

export const updateTicketStatusSchema = z.object({
  status: z.enum(["OPEN", "ANSWERED", "CLOSED"]),
});

export type CreateTicketInput = z.infer<typeof createTicketSchema>;
export type AddTicketMessageInput = z.infer<typeof addTicketMessageSchema>;
export type UpdateTicketStatusInput = z.infer<typeof updateTicketStatusSchema>;
