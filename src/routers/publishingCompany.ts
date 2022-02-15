import { Router } from "express";

import { PublishingCompanyGetAllController } from '../controllers'

const router = Router();

// get all publishing companies

const publishingCompanyGetAllController = new PublishingCompanyGetAllController();

router.get('/', publishingCompanyGetAllController.handler);

export default router;
