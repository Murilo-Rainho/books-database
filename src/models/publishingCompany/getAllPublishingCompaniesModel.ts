import prismaClient from '../../database/prismaClient';

import { PublishingCompany } from '../../interfaces/publishingCompany';

const getAllPublishingCompaniesModel = async (): Promise<PublishingCompany[]> => {
  const allPublishingCompanies = await prismaClient.publishingCompany.findMany();

  return allPublishingCompanies;
};

export default getAllPublishingCompaniesModel;
