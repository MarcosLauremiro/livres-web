/*
  Warnings:

  - You are about to drop the column `name` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Pgm` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[scheduleId]` on the table `Address` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Pgm` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `scheduleId` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Pgm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Pgm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baptism` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ministryId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pgmId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_date` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `university` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `work` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "scheduleId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "name",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Pgm" DROP COLUMN "name",
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "baptism" TEXT NOT NULL,
ADD COLUMN     "ministryId" TEXT NOT NULL,
ADD COLUMN     "pgmId" TEXT NOT NULL,
ADD COLUMN     "start_date" TEXT NOT NULL,
ADD COLUMN     "university" TEXT NOT NULL,
ADD COLUMN     "work" TEXT NOT NULL,
ALTER COLUMN "isAdmin" SET DEFAULT false,
ALTER COLUMN "register_at" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "schedule" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "hour" TEXT NOT NULL,
    "localization" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "target_audience" TEXT NOT NULL,

    CONSTRAINT "schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ministry" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Ministry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ministry_userId_key" ON "Ministry"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Address_scheduleId_key" ON "Address"("scheduleId");

-- CreateIndex
CREATE UNIQUE INDEX "Pgm_userId_key" ON "Pgm"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_pgmId_fkey" FOREIGN KEY ("pgmId") REFERENCES "Pgm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_ministryId_fkey" FOREIGN KEY ("ministryId") REFERENCES "Ministry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "schedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pgm" ADD CONSTRAINT "Pgm_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ministry" ADD CONSTRAINT "Ministry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
