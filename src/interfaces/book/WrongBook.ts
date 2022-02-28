import { Prisma } from ".prisma/client";

interface WrongBook {
  isbn: string;
  title: string;
  price: Prisma.Decimal;
  category: string;
  publishingCompanyId: number;
}

export default WrongBook;
