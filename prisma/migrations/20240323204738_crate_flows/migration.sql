/*
  Warnings:

  - You are about to alter the column `valor` on the `Flow` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Flow" ALTER COLUMN "valor" SET DATA TYPE INTEGER;
