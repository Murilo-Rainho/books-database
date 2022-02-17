import { PublishingCompany } from '../models'

import { newPublishingCompany } from '../interfaces';

class PublishingCompaniesCreateManyService {
  async handle(data : newPublishingCompany[]) {
    const publishingCompanyModel = new PublishingCompany();
    await publishingCompanyModel
      .createMany({ data });

    return data;
  }
};

export default PublishingCompaniesCreateManyService;
