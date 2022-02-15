import express, { Response, Request, NextFunction } from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json())

app.get('/ping', (_req: Request, res: Response, _next: NextFunction) => {
  res.status(200).json({ message: 'pong' })
});

export default app;
