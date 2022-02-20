import { Response, Request, NextFunction } from 'express';

import { PublishingCompanyGetAllService } from '../services'

import { PublishingCompany } from '../interfaces';

import { statusHttp } from '../enums';

class PublishingCompanyGetAllController {
  async handler(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<PublishingCompany[]> | void> {
    try {
      const publishingCompanyGetAllService = new PublishingCompanyGetAllService();
  
      const allPublishingCompanies = await publishingCompanyGetAllService.handle();
  
      return res.status(statusHttp.Ok).json(allPublishingCompanies)
    } catch (error) {
      next(error);
    }
  }
};

export default PublishingCompanyGetAllController;
