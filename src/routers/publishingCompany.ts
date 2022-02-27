import { Router } from "express";

import {
  getAllPublishingCompaniesService,
  createOneOrManyPublishingCompanyController,
  updatePublishingCompanyService,
  deletePublishingCompanyController,
} from '../controllers/publishingCompany';

import { FixOpeningDateType } from '../middlewares/publishingCompany';

const router = Router();

// get all publishing companies
router.get('/', getAllPublishingCompaniesService);

// post one or many publishing companies
const fixOpeningDateType = new FixOpeningDateType();
router.post(
  '/',
  fixOpeningDateType.handler,
  createOneOrManyPublishingCompanyController
);

// edit a publishing company
router.put(
  '/:id',
  fixOpeningDateType.handler,
  updatePublishingCompanyService
);

// delete a publishing company
router.delete('/:id', deletePublishingCompanyController);

export default router;
