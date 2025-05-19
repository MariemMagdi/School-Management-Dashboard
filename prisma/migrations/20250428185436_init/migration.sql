/*
  Warnings:

  - You are about to drop the column `birthday` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `birthday` on the `Teacher` table. All the data in the column will be lost.
  - Added the required column `endTime` to the `Attendance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Attendance` table without a default value. This is not possible if the table is not empty.
  - Made the column `supervisorId` on table `Class` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Day" ADD VALUE 'SATURDAY';
ALTER TYPE "Day" ADD VALUE 'SUNDAY';

-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_supervisorId_fkey";

-- DropIndex
DROP INDEX "Grade_level_key";

-- AlterTable
ALTER TABLE "Attendance" ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Class" ALTER COLUMN "supervisorId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "birthday";

-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "birthday";

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_supervisorId_fkey" FOREIGN KEY ("supervisorId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
