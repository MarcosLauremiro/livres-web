/*
  Warnings:

  - Added the required column `inscription` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "inscription" BOOLEAN NOT NULL,
ADD COLUMN     "status" BOOLEAN NOT NULL;
