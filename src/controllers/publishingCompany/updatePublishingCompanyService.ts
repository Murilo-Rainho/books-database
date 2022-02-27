import { Response, Request, NextFunction } from 'express';

import { updatePublishingCompanyService } from '../../services/publishingCompany'

import { PublishingCompany, NewPublishingCompany } from '../../interfaces/publishingCompany';

import { statusHttp } from '../../enums';

const updatePublishingCompanyController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<PublishingCompany> | void> => {
  try {
    const data = req.data as NewPublishingCompany;
    const { id } = req.params;

    const editedPublishinCompany = await updatePublishingCompanyService(Number(id), data);

    return res.status(statusHttp.Ok).json(editedPublishinCompany)
  } catch (error) {
    next(error);
  }
};

export default updatePublishingCompanyController;
