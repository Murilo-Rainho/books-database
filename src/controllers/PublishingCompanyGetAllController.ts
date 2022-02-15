import { Response, Request, NextFunction } from 'express';

import { PublishingCompanyGetAllService } from '../services'

class PublishingCompanyGetAllController {
  async handler(_req: Request, res: Response, _next: NextFunction) {
    const publishingCompanyGetAllService = new PublishingCompanyGetAllService();

    const allPublishingCompanies = await publishingCompanyGetAllService.handle();

    return res.status(200).json(allPublishingCompanies)
  }
};

export default PublishingCompanyGetAllController;
