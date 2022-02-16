import { Router } from "express";

import {
  PublishingCompanyGetAllController,
  PublishingCompanyCreateOneController,
} from '../controllers';

import { FixOpeningDateType } from '../middlewares';

const router = Router();

// get all publishing companies

const publishingCompanyGetAllController = new PublishingCompanyGetAllController();
router.get('/', publishingCompanyGetAllController.handler);

const publishingCompanyCreateOneController = new PublishingCompanyCreateOneController();
const fixOpeningDateType = new FixOpeningDateType();
router.post(
  '/',
  fixOpeningDateType.handler,
  publishingCompanyCreateOneController.handler
);

export default router;
