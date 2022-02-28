import { Book, NewBook } from "../../interfaces/book";
import { createOneBookModel } from "../../models/book";

const createOneBookService = async (
  data: NewBook,
): Promise<Book> => {
  const createdBook = await createOneBookModel({
    data
  });

  return createdBook;
};

export default createOneBookService;
