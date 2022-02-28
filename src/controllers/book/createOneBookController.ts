import { NextFunction, Request, Response } from "express";

import { createOneBookService } from '../../services/book';

import { Book, NewBook } from "../../interfaces/book";
import { statusHttp } from "../../enums";

const createOneBookController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response<Book> | void> => {
  try {
    const newBook = req.body as NewBook;
  
    const createdBook = await createOneBookService(newBook);
  
    return res.status(statusHttp.Ok).json(createdBook);
  } catch (error) {
    next(error);
  }
};

export default createOneBookController;
