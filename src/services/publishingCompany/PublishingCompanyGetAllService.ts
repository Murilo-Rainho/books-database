import { PublishingCompanyModel } from '../../models/publishingCompany'

import { PublishingCompany } from '../../interfaces/publishingCompany';

class PublishingCompanyGetAllService {
  async handle(): Promise<PublishingCompany[]> {
    const publishingCompanyModel = new PublishingCompanyModel();
    const allPublishingCompanies = await publishingCompanyModel.getAll();

    return allPublishingCompanies;
  }
};

export default PublishingCompanyGetAllService;
