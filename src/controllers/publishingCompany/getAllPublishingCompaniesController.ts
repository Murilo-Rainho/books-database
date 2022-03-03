import { Response, Request, NextFunction } from 'express';

import { getAllPublishingCompaniesService } from '../../services/publishingCompany'

import { PublishingCompany } from '../../interfaces/publishingCompany';

import { statusHttp } from '../../enums';

const getAllPublishingCompanyController = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<PublishingCompany[]> | void> => {
  try {
    const allPublishingCompanies = await getAllPublishingCompaniesService();

    return res.status(statusHttp.Ok).json(allPublishingCompanies)
  } catch (error) {
    next(error);
  }
};

export default getAllPublishingCompanyController;
