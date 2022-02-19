import { Response, Request, NextFunction } from 'express';

import { PublishingCompanyDeleteService } from '../services'

import { publishingCompany } from '../interfaces';

class PublishingCompanyDeleteController {
  async handler(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<publishingCompany> | void> {
    try {
      const publishingCompanyDeleteService = new PublishingCompanyDeleteService();

      const { id } = req.params;
  
      const deletedPublishingCompany = await publishingCompanyDeleteService.handle(Number(id));
  
      return res.status(200).json(deletedPublishingCompany)
    } catch (error) {
      next(error);
    }
  }
};

export default PublishingCompanyDeleteController;
