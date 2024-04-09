/*
  Warnings:

  - You are about to drop the column `userDetailId` on the `address` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `address` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "address" DROP CONSTRAINT "address_userDetailId_fkey";

-- DropIndex
DROP INDEX "address_userDetailId_key";

-- AlterTable
ALTER TABLE "address" DROP COLUMN "userDetailId",
ADD COLUMN     "userId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "address_userId_key" ON "address"("userId");

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "detailUsers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
