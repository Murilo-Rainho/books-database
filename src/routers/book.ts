import { Router } from 'express';

import {
  createOneBookController,
  getAllBooksController,
} from '../controllers/book';

import { fixPublishingCompanyIdField } from '../middlewares/book';

const router = Router();

// get all books
router.get('/', getAllBooksController);

// post one book
router.post('/', fixPublishingCompanyIdField, createOneBookController);

export default router;
