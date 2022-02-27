import { Response, Request, NextFunction } from 'express';

import { deletePublishingCompanyService } from '../../services/publishingCompany'

import { PublishingCompany } from '../../interfaces/publishingCompany';

import { statusHttp } from '../../enums';

const deletePublishingCompanyController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<PublishingCompany> | void> => {
  try {
    const { id } = req.params;

    const deletedPublishingCompany = await deletePublishingCompanyService(Number(id));

    return res.status(statusHttp.Ok).json(deletedPublishingCompany)
  } catch (error) {
    next(error);
  }
};

export default deletePublishingCompanyController;
