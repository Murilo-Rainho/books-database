import { Request, Response, NextFunction } from 'express';

import { Book } from '../../interfaces/book';
import { statusHttp } from '../../enums'

import { getAllBooksService } from '../../services/book'; 

const getAllBooksController = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<Book[]> | void> => {
  try {
    const allBooks = await getAllBooksService();

    return res.status(statusHttp.Ok).json(allBooks)
  } catch (error) {
    next(error);
  }
};

export default getAllBooksController;
