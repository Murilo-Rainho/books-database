import { Response, Request, NextFunction } from 'express';

import { PublishingCompanyCreateOneService, PublishingCompaniesCreateManyService } from '../services'

import { newPublishingCompany, publishingCompany } from '../interfaces';

class PublishingCompanyCreateOneOrManyController {
  async handler(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<publishingCompany> | void> {
    try {
      const publishingCompanyCreateOneService = new PublishingCompanyCreateOneService();
      const publishingCompaniesCreateManyService = new PublishingCompaniesCreateManyService();
      const data = req.data as newPublishingCompany | newPublishingCompany[];
      let allPublishingCompanies;

      if (Array.isArray(data)) {
        allPublishingCompanies = await publishingCompaniesCreateManyService.handle(data);

        return res.status(200).json(allPublishingCompanies);
      }
  
      allPublishingCompanies = await publishingCompanyCreateOneService.handle(data);
  
      return res.status(200).json(allPublishingCompanies)
    } catch (error) {
      next(error);
    }
  }
};

export default PublishingCompanyCreateOneOrManyController;
