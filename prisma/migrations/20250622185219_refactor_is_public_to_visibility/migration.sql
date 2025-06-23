/*
  Warnings:

  - You are about to drop the column `isPublic` on the `Prompt` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Visibility" AS ENUM ('PUBLIC', 'PRIVATE');

-- AlterTable
ALTER TABLE "Prompt" DROP COLUMN "isPublic",
ADD COLUMN     "visibility" "Visibility" NOT NULL DEFAULT 'PUBLIC';
