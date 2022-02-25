import { PublishingCompanyModel } from '../../models/publishingCompany'

import { NewPublishingCompany } from '../../interfaces/publishingCompany';

class PublishingCompaniesCreateManyService {
  async handle(data : NewPublishingCompany[]): Promise<NewPublishingCompany[]> {
    const publishingCompanyModel = new PublishingCompanyModel();
    await publishingCompanyModel
      .createMany({ data });

    return data;
  }
};

export default PublishingCompaniesCreateManyService;
