import { PublishingCompanyModel } from '../models'

class PublishingCompanyGetAllService {
  async handle() {
    const publishingCompanyModel = new PublishingCompanyModel();
    const allPublishingCompanies = await publishingCompanyModel.getAll();

    return allPublishingCompanies;
  }
};

export default PublishingCompanyGetAllService;
