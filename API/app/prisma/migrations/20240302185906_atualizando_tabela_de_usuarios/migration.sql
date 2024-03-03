/*
  Warnings:

  - Added the required column `register_at` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "register_at" TIMESTAMP(3) NOT NULL;
