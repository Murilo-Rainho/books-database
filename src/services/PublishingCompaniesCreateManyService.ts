import { PublishingCompanyModel } from '../models'

import { NewPublishingCompany } from '../interfaces';

class PublishingCompaniesCreateManyService {
  async handle(data : NewPublishingCompany[]) {
    const publishingCompanyModel = new PublishingCompanyModel();
    await publishingCompanyModel
      .createMany({ data });

    return data;
  }
};

export default PublishingCompaniesCreateManyService;
