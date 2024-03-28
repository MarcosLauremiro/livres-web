-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_pgmId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "pgmId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_pgmId_fkey" FOREIGN KEY ("pgmId") REFERENCES "Pgm"("id") ON DELETE SET NULL ON UPDATE CASCADE;
