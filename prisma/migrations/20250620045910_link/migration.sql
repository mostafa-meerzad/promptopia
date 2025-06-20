/*
  Warnings:

  - Made the column `authorId` on table `Prompt` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Prompt" ALTER COLUMN "authorId" SET NOT NULL,
ALTER COLUMN "authorId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Prompt" ADD CONSTRAINT "Prompt_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
