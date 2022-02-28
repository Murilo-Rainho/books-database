import prismaClient from "../../database/prismaClient";
import { Book, NewBook } from "../../interfaces/book";

const createOneBookModel = async (
  { data }: { data: NewBook },
): Promise<Book> => {
  const createdBook = await prismaClient.book.create({
    data
  });

  return createdBook;
};

export default createOneBookModel;
