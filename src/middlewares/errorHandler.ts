import {
  Request,
  Response,
  NextFunction,
} from 'express';

import { httpException, objectError } from '../interfaces';

const errorHandler = (
  error: httpException,
  _req: Request,
  res: Response,
  _next: NextFunction
): Response<objectError> => {
  // console.log(error);
  const returnResponse: objectError = {
    message: `Something went wrong: ${error.message}`,
  };
  return res.status(500).json(returnResponse);
};

export default errorHandler;
