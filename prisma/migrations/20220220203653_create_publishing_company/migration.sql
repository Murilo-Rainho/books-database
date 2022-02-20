/*
  Warnings:

  - You are about to drop the `publishin_companies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `publishin_companies`;

-- CreateTable
CREATE TABLE `publishing_companies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `corporateName` VARCHAR(70) NOT NULL,
    `fantasyName` VARCHAR(70) NOT NULL,
    `openingDate` DATETIME(3) NOT NULL,
    `address` VARCHAR(200) NOT NULL,
    `cellphone` CHAR(11) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
