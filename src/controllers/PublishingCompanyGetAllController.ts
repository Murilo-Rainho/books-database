import { Response, Request, NextFunction } from 'express';

import { PublishingCompanyGetAllService } from '../services'

import { publishingCompany } from '../interfaces';

class PublishingCompanyGetAllController {
  async handler(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<publishingCompany[]> | void> {
    try {
      const publishingCompanyGetAllService = new PublishingCompanyGetAllService();
  
      const allPublishingCompanies = await publishingCompanyGetAllService.handle();
  
      return res.status(200).json(allPublishingCompanies)
    } catch (error) {
      next(error);
    }
  }
};

export default PublishingCompanyGetAllController;
