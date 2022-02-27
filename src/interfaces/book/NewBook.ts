import { Prisma } from ".prisma/client";

interface NewBook {
  isbn: string;
  title: string;
  price: Prisma.Decimal;
  category: string;
  publishing_company_id: number;
}

export default NewBook;
