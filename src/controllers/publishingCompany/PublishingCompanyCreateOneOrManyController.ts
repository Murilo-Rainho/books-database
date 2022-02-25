import { Response, Request, NextFunction } from 'express';

import { PublishingCompanyCreateOneService, PublishingCompaniesCreateManyService } from '../../services/publishingCompany'

import { NewPublishingCompany, PublishingCompany } from '../../interfaces/publishingCompany';

import { statusHttp } from '../../enums';

class PublishingCompanyCreateOneOrManyController {
  async handler(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<PublishingCompany> | void> {
    try {
      const publishingCompanyCreateOneService = new PublishingCompanyCreateOneService();
      const publishingCompaniesCreateManyService = new PublishingCompaniesCreateManyService();

      const data = req.data as NewPublishingCompany | NewPublishingCompany[];
      let allPublishingCompanies;

      if (Array.isArray(data)) {
        allPublishingCompanies = await publishingCompaniesCreateManyService.handle(data);

        return res.status(statusHttp.Ok).json(allPublishingCompanies);
      }
  
      allPublishingCompanies = await publishingCompanyCreateOneService.handle(data);
  
      return res.status(statusHttp.Ok).json(allPublishingCompanies)
    } catch (error) {
      next(error);
    }
  }
};

export default PublishingCompanyCreateOneOrManyController;
