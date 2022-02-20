-- CreateTable
CREATE TABLE `books` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `isbn` VARCHAR(15) NOT NULL,
    `title` VARCHAR(50) NOT NULL,
    `price` DECIMAL(5, 2) NOT NULL,
    `category` VARCHAR(20) NOT NULL,
    `publishinCompanyId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `books` ADD CONSTRAINT `books_publishinCompanyId_fkey` FOREIGN KEY (`publishinCompanyId`) REFERENCES `publishing_companies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
