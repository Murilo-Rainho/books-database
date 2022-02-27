import { createManyPublishingCompaniesModel } from '../../models/publishingCompany'

import { NewPublishingCompany } from '../../interfaces/publishingCompany';

const createManyPublishingCompaniesService = async (data : NewPublishingCompany[]): Promise<NewPublishingCompany[]> => {
  await createManyPublishingCompaniesModel({ data });

  return data;
};

export default createManyPublishingCompaniesService;
