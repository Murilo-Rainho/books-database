import { Response, Request, NextFunction } from 'express';

import { PublishingCompanyCreateOneService } from '../services'

import { newPublishingCompany, publishingCompany } from '../interfaces';

class PublishingCompanyCreateOneController {
  async handler(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<publishingCompany> | void> {
    try {
      const publishingCompanyCreateOneService = new PublishingCompanyCreateOneService();
      const data = req.data as newPublishingCompany;
  
      const allPublishingCompanies = await publishingCompanyCreateOneService.handle(data);
  
      return res.status(200).json(allPublishingCompanies)
    } catch (error) {
      next(error);
    }
  }
};

export default PublishingCompanyCreateOneController;
