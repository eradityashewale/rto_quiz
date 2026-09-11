-- AlterTable
ALTER TABLE "TicketMessage" ADD COLUMN     "attachments" TEXT[] DEFAULT ARRAY[]::TEXT[];
