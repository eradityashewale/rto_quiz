-- CreateTable
CREATE TABLE "DailyFreeProgress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "testId" TEXT NOT NULL,
    "servedQuestionIds" JSONB NOT NULL DEFAULT '[]',
    "cycleNumber" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DailyFreeProgress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DailyFreeProgress_userId_idx" ON "DailyFreeProgress"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "DailyFreeProgress_userId_testId_key" ON "DailyFreeProgress"("userId", "testId");

-- AddForeignKey
ALTER TABLE "DailyFreeProgress" ADD CONSTRAINT "DailyFreeProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyFreeProgress" ADD CONSTRAINT "DailyFreeProgress_testId_fkey" FOREIGN KEY ("testId") REFERENCES "Test"("id") ON DELETE CASCADE ON UPDATE CASCADE;
