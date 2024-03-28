-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_pgmId_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_scheduleId_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_userId_fkey";

-- AlterTable
ALTER TABLE "Address" ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "eventId" DROP NOT NULL,
ALTER COLUMN "pgmId" DROP NOT NULL,
ALTER COLUMN "scheduleId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_pgmId_fkey" FOREIGN KEY ("pgmId") REFERENCES "Pgm"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "Schedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;
