import { Response, Request, NextFunction } from 'express';

import { PublishingCompanyUpdateService } from '../services'

import { publishingCompany, newPublishingCompany } from '../interfaces';

class PublishingCompanyUpdateController {
  async handler(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<publishingCompany> | void> {
    try {
      const publishingCompanyUpdateService = new PublishingCompanyUpdateService();

      const data = req.data as newPublishingCompany;
      const { id } = req.params;

      const editedPublishinCompany = await publishingCompanyUpdateService
        .handle(Number(id), data);
  
      return res.status(200).json(editedPublishinCompany)
    } catch (error) {
      next(error);
    }
  }
};

export default PublishingCompanyUpdateController;
