/*
  Warnings:

  - You are about to drop the column `publishin_company_id` on the `books` table. All the data in the column will be lost.
  - Added the required column `publishing_company_id` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `books` DROP FOREIGN KEY `books_publishin_company_id_fkey`;

-- AlterTable
ALTER TABLE `books` DROP COLUMN `publishin_company_id`,
    ADD COLUMN `publishing_company_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `books` ADD CONSTRAINT `books_publishing_company_id_fkey` FOREIGN KEY (`publishing_company_id`) REFERENCES `publishing_companies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
