/*
  Warnings:

  - You are about to drop the column `userId` on the `Ministry` table. All the data in the column will be lost.
  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pgm` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Schedule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[leaderDetailId]` on the table `Ministry` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_pgmId_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_scheduleId_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_userId_fkey";

-- DropForeignKey
ALTER TABLE "Ministry" DROP CONSTRAINT "Ministry_userId_fkey";

-- DropForeignKey
ALTER TABLE "Pgm" DROP CONSTRAINT "Pgm_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_ministryId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_pgmId_fkey";

-- DropIndex
DROP INDEX "Ministry_userId_key";

-- AlterTable
ALTER TABLE "Ministry" DROP COLUMN "userId",
ADD COLUMN     "addressId" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "leaderDetailId" TEXT,
ALTER COLUMN "description" DROP NOT NULL;

-- DropTable
DROP TABLE "Address";

-- DropTable
DROP TABLE "Event";

-- DropTable
DROP TABLE "Pgm";

-- DropTable
DROP TABLE "Schedule";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "dateBirth" TIMESTAMP(3),
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "detailUsers" (
    "id" TEXT NOT NULL,
    "marital_status" BOOLEAN,
    "instagram" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "university" BOOLEAN,
    "work" BOOLEAN,
    "baptism" BOOLEAN,
    "start_date" TEXT,
    "gender" TEXT,
    "emergencyContact" TEXT,
    "detail" TEXT,
    "description" TEXT,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "pGMId" TEXT,
    "ministryId" TEXT,

    CONSTRAINT "detailUsers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PGM" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "leaderDetailId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "PGM_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" TEXT NOT NULL,
    "road" TEXT,
    "neighborhood" TEXT,
    "number" TEXT,
    "complement" TEXT,
    "userDetailId" TEXT,
    "pgmId" TEXT,
    "eventId" TEXT,
    "scheduleId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Eventos" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "location" TEXT,
    "description" TEXT,
    "enrollment" BOOLEAN NOT NULL DEFAULT false,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Eventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedule" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "hour" TEXT,
    "localization" TEXT,
    "date" TIMESTAMP(3),
    "target_audience" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "schedule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "detailUsers_userId_key" ON "detailUsers"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PGM_leaderDetailId_key" ON "PGM"("leaderDetailId");

-- CreateIndex
CREATE UNIQUE INDEX "address_userDetailId_key" ON "address"("userDetailId");

-- CreateIndex
CREATE UNIQUE INDEX "address_pgmId_key" ON "address"("pgmId");

-- CreateIndex
CREATE UNIQUE INDEX "address_eventId_key" ON "address"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "address_scheduleId_key" ON "address"("scheduleId");

-- CreateIndex
CREATE UNIQUE INDEX "Ministry_leaderDetailId_key" ON "Ministry"("leaderDetailId");

-- AddForeignKey
ALTER TABLE "detailUsers" ADD CONSTRAINT "detailUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detailUsers" ADD CONSTRAINT "detailUsers_pGMId_fkey" FOREIGN KEY ("pGMId") REFERENCES "PGM"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detailUsers" ADD CONSTRAINT "detailUsers_ministryId_fkey" FOREIGN KEY ("ministryId") REFERENCES "Ministry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PGM" ADD CONSTRAINT "PGM_leaderDetailId_fkey" FOREIGN KEY ("leaderDetailId") REFERENCES "detailUsers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ministry" ADD CONSTRAINT "Ministry_leaderDetailId_fkey" FOREIGN KEY ("leaderDetailId") REFERENCES "detailUsers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ministry" ADD CONSTRAINT "Ministry_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_userDetailId_fkey" FOREIGN KEY ("userDetailId") REFERENCES "detailUsers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_pgmId_fkey" FOREIGN KEY ("pgmId") REFERENCES "PGM"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Eventos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "schedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;
