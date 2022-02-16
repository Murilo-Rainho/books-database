import { PublishingCompany } from '../models'

import { newPublishingCompany, publishingCompany } from '../interfaces';

class PublishingCompanyCreateOneService {
  async handle(data : newPublishingCompany): Promise<publishingCompany> {
    const publishingCompanyModel = new PublishingCompany();
    const newPublishingCompany = await publishingCompanyModel
      .createOne({ data });

    return newPublishingCompany;
  }
};

export default PublishingCompanyCreateOneService;
