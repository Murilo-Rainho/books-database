"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST, MYSQL_DATABASE, PORT } = process.env;
const prismaClient = new client_1.PrismaClient({
    datasources: {
        db: {
            url: `mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@${MYSQL_HOST}:3306/${MYSQL_DATABASE}`,
        },
    },
});
exports.default = prismaClient;
//# sourceMappingURL=prismaClient.js.map