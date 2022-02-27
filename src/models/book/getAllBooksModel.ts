import prismaClient from '../../database/prismaClient';

import { Book } from '../../interfaces/book'

const getAllBooksModel = async (): Promise<Book[]> => {
  const allBooks = await prismaClient.book.findMany();

  return allBooks;
};

export default getAllBooksModel;
