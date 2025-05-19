/*
  Warnings:

  - You are about to drop the column `date` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `bloodtype` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `bloodtype` on the `Teacher` table. All the data in the column will be lost.
  - Added the required column `date` to the `Announcement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bloodType` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bloodType` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Announcement" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "date",
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "bloodtype",
ADD COLUMN     "bloodType" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "bloodtype",
ADD COLUMN     "bloodType" TEXT NOT NULL;
