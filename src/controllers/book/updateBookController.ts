import { Response, NextFunction } from 'express';

import { CustomRequest } from '../../interfaces';

import { updateBookService } from '../../services/book'

import { Book, NewBook } from '../../interfaces/book';

import { statusHttp } from '../../enums';

const updateBookController = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): Promise<Response<Book> | void> => {
  try {
    const data = req.data as NewBook;
    const { id } = req.params;

    const editedBook = await updateBookService(Number(id), data);

    return res.status(statusHttp.Ok).json(editedBook)
  } catch (error) {
    next(error);
  }
};

export default updateBookController;
