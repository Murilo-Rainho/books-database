-- CreateTable
CREATE TABLE `publishingCompany` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `corporateName` VARCHAR(70) NOT NULL,
    `fantasyName` VARCHAR(70) NOT NULL,
    `openingDate` DATETIME(3) NOT NULL,
    `address` VARCHAR(200) NOT NULL,
    `cellphone` CHAR(11) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
