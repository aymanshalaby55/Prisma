-- DropForeignKey
ALTER TABLE "UserPrefrence" DROP CONSTRAINT "UserPrefrence_userId_fkey";

-- AlterTable
ALTER TABLE "UserPrefrence" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "UserPrefrence" ADD CONSTRAINT "UserPrefrence_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
