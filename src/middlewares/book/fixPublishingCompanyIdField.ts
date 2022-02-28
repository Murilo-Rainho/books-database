import { Response, NextFunction } from 'express';

import { CustomRequest } from '../../interfaces';

import { NewBook, WrongBook } from '../../interfaces/book';

const fixPublishingCompanyIdField = (
  req: CustomRequest,
  _res: Response,
  next: NextFunction
): void => {
  try {
    const {
      isbn,
      title,
      price,
      category,
      publishingCompanyId,
    } = req.body;

    const editedData: NewBook = {
      isbn,
      title,
      price,
      category,
      publishing_company_id: publishingCompanyId,
    };

    req.data = editedData;

    next()
  } catch (error) {
    next(error);
  }
};

export default fixPublishingCompanyIdField;
