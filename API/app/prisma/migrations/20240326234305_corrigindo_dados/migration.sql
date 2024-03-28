/*
  Warnings:

  - The `marital_status` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `baptism` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `university` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `work` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "marital_status",
ADD COLUMN     "marital_status" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "status" SET DEFAULT true,
DROP COLUMN "baptism",
ADD COLUMN     "baptism" BOOLEAN NOT NULL,
DROP COLUMN "university",
ADD COLUMN     "university" BOOLEAN NOT NULL,
DROP COLUMN "work",
ADD COLUMN     "work" BOOLEAN NOT NULL;
