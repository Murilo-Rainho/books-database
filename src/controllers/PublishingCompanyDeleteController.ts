import { Response, Request, NextFunction } from 'express';

import { PublishingCompanyDeleteService } from '../services'

import { PublishingCompany } from '../interfaces';

import { statusHttp } from '../enums';

class PublishingCompanyDeleteController {
  async handler(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<PublishingCompany> | void> {
    try {
      const publishingCompanyDeleteService = new PublishingCompanyDeleteService();

      const { id } = req.params;
  
      const deletedPublishingCompany = await publishingCompanyDeleteService.handle(Number(id));
  
      return res.status(statusHttp.Ok).json(deletedPublishingCompany)
    } catch (error) {
      next(error);
    }
  }
};

export default PublishingCompanyDeleteController;
