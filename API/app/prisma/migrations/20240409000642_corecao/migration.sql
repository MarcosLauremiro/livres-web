/*
  Warnings:

  - Made the column `userId` on table `detailUsers` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "detailUsers" DROP CONSTRAINT "detailUsers_userId_fkey";

-- AlterTable
ALTER TABLE "detailUsers" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "detailUsers" ADD CONSTRAINT "detailUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
