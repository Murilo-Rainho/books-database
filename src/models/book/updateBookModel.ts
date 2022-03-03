import prismaClient from "../../database/prismaClient";
import { Book, NewBook } from "../../interfaces/book";

const updateBookModel = async (
  { where: { id } }: { where: { id: number } },
  { data }: { data: NewBook },
): Promise<Book> => {
  const updatedBook = await prismaClient.book.update({
    where: { id },
    data
  });

  return updatedBook;
};

export default updateBookModel;
