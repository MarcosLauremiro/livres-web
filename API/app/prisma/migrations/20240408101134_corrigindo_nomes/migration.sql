/*
  Warnings:

  - You are about to drop the column `pGMId` on the `detailUsers` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "detailUsers" DROP CONSTRAINT "detailUsers_pGMId_fkey";

-- AlterTable
ALTER TABLE "detailUsers" DROP COLUMN "pGMId",
ADD COLUMN     "PGMId" TEXT;

-- AddForeignKey
ALTER TABLE "detailUsers" ADD CONSTRAINT "detailUsers_PGMId_fkey" FOREIGN KEY ("PGMId") REFERENCES "PGM"("id") ON DELETE SET NULL ON UPDATE CASCADE;
