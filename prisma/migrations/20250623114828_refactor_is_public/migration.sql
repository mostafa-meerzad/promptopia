/*
  Warnings:

  - You are about to drop the column `visibility` on the `Prompt` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Prompt" DROP COLUMN "visibility",
ADD COLUMN     "isPublic" BOOLEAN NOT NULL DEFAULT true;

-- DropEnum
DROP TYPE "Visibility";
