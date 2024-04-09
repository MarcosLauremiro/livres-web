-- DropForeignKey
ALTER TABLE "detailUsers" DROP CONSTRAINT "detailUsers_userId_fkey";

-- AlterTable
ALTER TABLE "detailUsers" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "detailUsers" ADD CONSTRAINT "detailUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
