/*
  Warnings:

  - You are about to drop the column `publishinCompanyId` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `corporateName` on the `publishing_companies` table. All the data in the column will be lost.
  - You are about to drop the column `fantasyName` on the `publishing_companies` table. All the data in the column will be lost.
  - You are about to drop the column `openingDate` on the `publishing_companies` table. All the data in the column will be lost.
  - Added the required column `publishin_company_id` to the `books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `corporate_name` to the `publishing_companies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fantasy_name` to the `publishing_companies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `opening_date` to the `publishing_companies` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `books` DROP FOREIGN KEY `books_publishinCompanyId_fkey`;

-- AlterTable
ALTER TABLE `books` DROP COLUMN `publishinCompanyId`,
    ADD COLUMN `publishin_company_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `publishing_companies` DROP COLUMN `corporateName`,
    DROP COLUMN `fantasyName`,
    DROP COLUMN `openingDate`,
    ADD COLUMN `corporate_name` VARCHAR(70) NOT NULL,
    ADD COLUMN `fantasy_name` VARCHAR(70) NOT NULL,
    ADD COLUMN `opening_date` DATETIME(3) NOT NULL;

-- AddForeignKey
ALTER TABLE `books` ADD CONSTRAINT `books_publishin_company_id_fkey` FOREIGN KEY (`publishin_company_id`) REFERENCES `publishing_companies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
