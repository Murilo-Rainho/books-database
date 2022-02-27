import { Book } from '../../interfaces/book';
import { getAllBooksModel } from '../../models/book';

const getAllBooksService = async (): Promise<Book[]> => {
  const allBooks = await getAllBooksModel();

  return allBooks;
};

export default getAllBooksService;
