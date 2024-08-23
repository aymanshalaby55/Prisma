/*
  Warnings:

  - Added the required column `emailUpdates` to the `UserPrefrence` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserPrefrence" ADD COLUMN     "emailUpdates" BOOLEAN NOT NULL;
