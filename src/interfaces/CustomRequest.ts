import { Request } from "express";

interface CustomRequest extends Request {
  data?: any;
}

export default CustomRequest;
