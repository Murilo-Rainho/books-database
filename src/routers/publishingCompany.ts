import { Router } from "express";

import {
  PublishingCompanyGetAllController,
  PublishingCompanyCreateOneOrManyController,
  PublishingCompanyUpdateController,
  PublishingCompanyDeleteController,
} from '../controllers/publishingCompany';

import { FixOpeningDateType } from '../middlewares/publishingCompany';

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

// delete a publishing company

const publishingCompanyDeleteController = new PublishingCompanyDeleteController();
router.delete('/:id', publishingCompanyDeleteController.handler);

export default router;
