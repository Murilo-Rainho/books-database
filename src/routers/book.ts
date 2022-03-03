import { Router } from 'express';

import {
  createOneBookController,
  getAllBooksController,
  updateBookController,
} from '../controllers/book';

import { fixPublishingCompanyIdField } from '../middlewares/book';

const router = Router();

// get all books
router.get('/', getAllBooksController);

// create one book
router.post('/', fixPublishingCompanyIdField, createOneBookController);

// edit one book
router.put('/', fixPublishingCompanyIdField, updateBookController);

export default router;
