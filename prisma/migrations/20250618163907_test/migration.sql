/*
  Warnings:

  - You are about to drop the column `prompt` on the `Prompt` table. All the data in the column will be lost.
  - Added the required column `content` to the `Prompt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Prompt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Prompt" DROP COLUMN "prompt",
ADD COLUMN     "authorId" INTEGER,
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "isPublic" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "rating" DOUBLE PRECISION DEFAULT 0,
ADD COLUMN     "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "views" INTEGER NOT NULL DEFAULT 0;
