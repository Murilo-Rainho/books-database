import { Router } from "express";

import {
  PublishingCompanyGetAllController,
  PublishingCompanyCreateOneOrManyController,
} from '../controllers';

import { FixOpeningDateType } from '../middlewares';

const router = Router();

// get all publishing companies

const publishingCompanyGetAllController = new PublishingCompanyGetAllController();
router.get('/', publishingCompanyGetAllController.handler);

const publishingCompanyCreateOneOrManyController = new PublishingCompanyCreateOneOrManyController();
const fixOpeningDateType = new FixOpeningDateType();
router.post(
  '/',
  fixOpeningDateType.handler,
  publishingCompanyCreateOneOrManyController.handler
);

export default router;
