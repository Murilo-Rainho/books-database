import { Router } from "express";

import {
  PublishingCompanyGetAllController,
  PublishingCompanyCreateOneOrManyController,
  PublishingCompanyUpdateController,
} from '../controllers';

import { FixOpeningDateType } from '../middlewares';

const router = Router();

// get all publishing companies

const publishingCompanyGetAllController = new PublishingCompanyGetAllController();
router.get('/', publishingCompanyGetAllController.handler);

// post one or many publishing companies

const publishingCompanyCreateOneOrManyController = new PublishingCompanyCreateOneOrManyController();
const fixOpeningDateType = new FixOpeningDateType();
router.post(
  '/',
  fixOpeningDateType.handler,
  publishingCompanyCreateOneOrManyController.handler
);

// edit a publishing company

const publishingCompanyUpdateController = new PublishingCompanyUpdateController();
router.put(
  '/:id',
  fixOpeningDateType.handler,
  publishingCompanyUpdateController.handler
);

export default router;
