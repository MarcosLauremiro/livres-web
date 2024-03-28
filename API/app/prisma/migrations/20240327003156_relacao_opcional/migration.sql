-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_ministryId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "ministryId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_ministryId_fkey" FOREIGN KEY ("ministryId") REFERENCES "Ministry"("id") ON DELETE SET NULL ON UPDATE CASCADE;
