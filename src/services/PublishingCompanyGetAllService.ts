import { PublishingCompany } from '../models'

class PublishingCompanyGetAllService {
  async handle() {
    const publishingCompanyModel = new PublishingCompany();
    const allPublishingCompanies = await publishingCompanyModel.getAll();

    return allPublishingCompanies;
  }
};

export default PublishingCompanyGetAllService;
