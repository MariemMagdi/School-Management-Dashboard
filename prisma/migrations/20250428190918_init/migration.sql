/*
  Warnings:

  - You are about to drop the column `endTime` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `Attendance` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_supervisorId_fkey";

-- AlterTable
ALTER TABLE "Attendance" DROP COLUMN "endTime",
DROP COLUMN "startTime";

-- AlterTable
ALTER TABLE "Class" ALTER COLUMN "supervisorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_supervisorId_fkey" FOREIGN KEY ("supervisorId") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
