import { Router } from "express";

import {
  getAllPublishingCompaniesService,
  createOneOrManyPublishingCompanyController,
  updatePublishingCompanyService,
  deletePublishingCompanyController,
} from '../controllers/publishingCompany';

import { fixOpeningDateType } from '../middlewares/publishingCompany';

const router = Router();

// get all publishing companies
router.get('/', getAllPublishingCompaniesService);

// post one or many publishing companies
router.post(
  '/',
  fixOpeningDateType,
  createOneOrManyPublishingCompanyController
);

// edit a publishing company
router.put(
  '/:id',
  fixOpeningDateType,
  updatePublishingCompanyService
);

// delete a publishing company
router.delete('/:id', deletePublishingCompanyController);

export default router;
