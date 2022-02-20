import { PublishingCompanyModel } from '../models'

import { PublishingCompany } from '../interfaces';

class PublishingCompanyDeleteService {
  async handle(id: number): Promise<PublishingCompany> {
    const publishingCompanyModel = new PublishingCompanyModel();
    const deletedPublishingCompany = await publishingCompanyModel
      .delete({ where: { id } });

    return deletedPublishingCompany;
  }
};

export default PublishingCompanyDeleteService;
