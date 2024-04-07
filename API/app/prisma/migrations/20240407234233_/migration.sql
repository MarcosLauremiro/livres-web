/*
  Warnings:

  - You are about to drop the column `leaderDetailId` on the `Ministry` table. All the data in the column will be lost.
  - You are about to drop the column `leaderDetailId` on the `PGM` table. All the data in the column will be lost.
  - You are about to drop the column `marital_status` on the `detailUsers` table. All the data in the column will be lost.
  - You are about to drop the column `start_date` on the `detailUsers` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[leaderId]` on the table `Ministry` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[leaderId]` on the table `PGM` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Ministry" DROP CONSTRAINT "Ministry_leaderDetailId_fkey";

-- DropForeignKey
ALTER TABLE "PGM" DROP CONSTRAINT "PGM_leaderDetailId_fkey";

-- DropIndex
DROP INDEX "Ministry_leaderDetailId_key";

-- DropIndex
DROP INDEX "PGM_leaderDetailId_key";

-- AlterTable
ALTER TABLE "Ministry" DROP COLUMN "leaderDetailId",
ADD COLUMN     "leaderId" TEXT;

-- AlterTable
ALTER TABLE "PGM" DROP COLUMN "leaderDetailId",
ADD COLUMN     "leaderId" TEXT;

-- AlterTable
ALTER TABLE "detailUsers" DROP COLUMN "marital_status",
DROP COLUMN "start_date",
ADD COLUMN     "maritalStatus" BOOLEAN,
ADD COLUMN     "startDate" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Ministry_leaderId_key" ON "Ministry"("leaderId");

-- CreateIndex
CREATE UNIQUE INDEX "PGM_leaderId_key" ON "PGM"("leaderId");

-- AddForeignKey
ALTER TABLE "PGM" ADD CONSTRAINT "PGM_leaderId_fkey" FOREIGN KEY ("leaderId") REFERENCES "detailUsers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ministry" ADD CONSTRAINT "Ministry_leaderId_fkey" FOREIGN KEY ("leaderId") REFERENCES "detailUsers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
