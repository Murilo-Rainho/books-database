import { Router } from 'express';

import {
  createOneBookController,
  getAllBooksController,
} from '../controllers/book';

const router = Router();

// get all books
router.get('/', getAllBooksController);

// post one book
router.post('/', createOneBookController);

export default router;
