import { PublishingCompanyModel } from '../models'

import { PublishingCompany } from '../interfaces';

class PublishingCompanyGetAllService {
  async handle(): Promise<PublishingCompany[]> {
    const publishingCompanyModel = new PublishingCompanyModel();
    const allPublishingCompanies = await publishingCompanyModel.getAll();

    return allPublishingCompanies;
  }
};

export default PublishingCompanyGetAllService;
