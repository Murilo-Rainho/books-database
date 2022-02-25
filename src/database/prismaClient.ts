import { PrismaClient } from "@prisma/client";

const {
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_HOST,
  MYSQL_DATABASE,
  PORT
} = process.env;

const prismaClient = new PrismaClient({
  datasources: {
    db: {
      url: `mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@${MYSQL_HOST}:3306/${MYSQL_DATABASE}`,
    },
  },
});

export default prismaClient;
