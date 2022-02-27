import { getAllPublishingCompaniesModel } from '../../models/publishingCompany'

import { PublishingCompany } from '../../interfaces/publishingCompany';

const getAllPublishingCompaniesService = async (): Promise<PublishingCompany[]> => {
  const allPublishingCompanies = await getAllPublishingCompaniesModel();

  return allPublishingCompanies;
};

export default getAllPublishingCompaniesService;
