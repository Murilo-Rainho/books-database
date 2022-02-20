import { Response, Request, NextFunction } from 'express';

import { PublishingCompanyUpdateService } from '../services'

import { PublishingCompany, NewPublishingCompany } from '../interfaces';

import { statusHttp } from '../enums';

class PublishingCompanyUpdateController {
  async handler(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<PublishingCompany> | void> {
    try {
      const publishingCompanyUpdateService = new PublishingCompanyUpdateService();

      const data = req.data as NewPublishingCompany;
      const { id } = req.params;

      const editedPublishinCompany = await publishingCompanyUpdateService
        .handle(Number(id), data);
  
      return res.status(statusHttp.Ok).json(editedPublishinCompany)
    } catch (error) {
      next(error);
    }
  }
};

export default PublishingCompanyUpdateController;
