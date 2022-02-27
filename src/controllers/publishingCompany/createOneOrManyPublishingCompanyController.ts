import { Response, Request, NextFunction } from 'express';

import { createOnePublishingCompanyService, createManyPublishingCompaniesService } from '../../services/publishingCompany'

import { NewPublishingCompany, PublishingCompany } from '../../interfaces/publishingCompany';

import { statusHttp } from '../../enums';

const createOneOrManyPublishingCompanyController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<PublishingCompany> | void> => {
  try {

    const data = req.data as NewPublishingCompany | NewPublishingCompany[];
    let allPublishingCompanies;

    if (Array.isArray(data)) {
      allPublishingCompanies = await createManyPublishingCompaniesService(data);

      return res.status(statusHttp.Ok).json(allPublishingCompanies);
    }

    allPublishingCompanies = await createOnePublishingCompanyService(data);

    return res.status(statusHttp.Ok).json(allPublishingCompanies)
  } catch (error) {
    next(error);
  }
};

export default createOneOrManyPublishingCompanyController;
