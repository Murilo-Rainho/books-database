import { Router } from 'express';

import {
  getAllBooksController,
} from '../controllers/book';

const router = Router();

// get all books
router.get('/', getAllBooksController);

export default router;
