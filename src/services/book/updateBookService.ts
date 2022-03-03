import { updateBookModel } from '../../models/book';

import { NewBook, Book } from '../../interfaces/book';

const updateBookService = async (
  id: number,
  data: NewBook,
): Promise<Book> => {
  const editedBook = await updateBookModel({ where: { id } }, { data });

  return editedBook;
};

export default updateBookService;
