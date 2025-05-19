/*
  Warnings:

  - The values [SATURDAY,SUNDAY] on the enum `Day` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `endTime` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `Attendance` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[level]` on the table `Grade` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `birthday` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Day_new" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY');
ALTER TABLE "Lesson" ALTER COLUMN "day" TYPE "Day_new" USING ("day"::text::"Day_new");
ALTER TYPE "Day" RENAME TO "Day_old";
ALTER TYPE "Day_new" RENAME TO "Day";
DROP TYPE "Day_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_supervisorId_fkey";

-- AlterTable
ALTER TABLE "Attendance" DROP COLUMN "endTime",
DROP COLUMN "startTime";

-- AlterTable
ALTER TABLE "Class" ALTER COLUMN "supervisorId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Grade_level_key" ON "Grade"("level");

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_supervisorId_fkey" FOREIGN KEY ("supervisorId") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
