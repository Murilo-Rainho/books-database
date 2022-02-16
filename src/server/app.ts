import express, { Response, Request, NextFunction } from "express";
import bodyParser from "body-parser";

import { publishingCompanyRouter } from "../routers";

import { errorHandler } from '../middlewares';

const app = express();

app.use(bodyParser.json());

app.use('/publishingCompany', publishingCompanyRouter);

app.get('/ping', (_req: Request, res: Response, _next: NextFunction) => {
  res.status(200).json({ message: 'pong' })
});

app.use(errorHandler);

export default app;
