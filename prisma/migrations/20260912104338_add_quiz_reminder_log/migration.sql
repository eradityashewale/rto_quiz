-- CreateTable
CREATE TABLE "QuizReminderLog" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "QuizReminderLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "QuizReminderLog_userId_idx" ON "QuizReminderLog"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "QuizReminderLog_userId_date_key" ON "QuizReminderLog"("userId", "date");

-- AddForeignKey
ALTER TABLE "QuizReminderLog" ADD CONSTRAINT "QuizReminderLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
