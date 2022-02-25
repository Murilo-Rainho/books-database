import express, { Response, Request, NextFunction } from "express";
import bodyParser from "body-parser";

import { publishingCompanyRouter, bookRouter } from "../routers";

import errorHandler from '../middlewares/errorHandler';

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req: Request, res: Response, _next: NextFunction) => {
  res.status(200).json({ message: 'pong' })
});

app.use('/publishingCompany', publishingCompanyRouter);

app.use('/book', bookRouter);

app.use(errorHandler);

export default app;
