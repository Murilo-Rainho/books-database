import { PublishingCompanyModel } from '../models'

import { NewPublishingCompany, PublishingCompany } from '../interfaces';

class PublishingCompanyCreateOneService {
  async handle(data : NewPublishingCompany): Promise<PublishingCompany> {
    const publishingCompanyModel = new PublishingCompanyModel();
    const newPublishingCompany = await publishingCompanyModel
      .createOne({ data });

    return newPublishingCompany;
  }
};

export default PublishingCompanyCreateOneService;
