/*
  Warnings:

  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[pgmId]` on the table `Address` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[eventId]` on the table `Address` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `eventId` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pgmId` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_birth` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instagram` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marital_status` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "eventId" TEXT NOT NULL,
ADD COLUMN     "pgmId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "age",
ADD COLUMN     "date_birth" TEXT NOT NULL,
ADD COLUMN     "instagram" TEXT NOT NULL,
ADD COLUMN     "marital_status" TEXT NOT NULL,
ADD COLUMN     "status" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "Pgm" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "Pgm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Address_pgmId_key" ON "Address"("pgmId");

-- CreateIndex
CREATE UNIQUE INDEX "Address_eventId_key" ON "Address"("eventId");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_pgmId_fkey" FOREIGN KEY ("pgmId") REFERENCES "Pgm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
