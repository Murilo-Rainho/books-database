import { NextFunction, Response } from "express";

import { CustomRequest } from "../../interfaces";

import { createOneBookService } from '../../services/book';

import { Book, NewBook } from "../../interfaces/book";
import { statusHttp } from "../../enums";

const createOneBookController = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction,
): Promise<Response<Book> | void> => {
  try {
    const newBook = req.data as NewBook;
  
    const createdBook = await createOneBookService(newBook);
  
    return res.status(statusHttp.Ok).json(createdBook);
  } catch (error) {
    next(error);
  }
};

export default createOneBookController;
