import { PublishingCompany } from '../models'

import { publishingCompany } from '../interfaces';

class PublishingCompanyDeleteService {
  async handle(id: number): Promise<publishingCompany> {
    const publishingCompanyModel = new PublishingCompany();
    const deletedPublishingCompany = await publishingCompanyModel
      .delete({ where: { id } });

    return deletedPublishingCompany;
  }
};

export default PublishingCompanyDeleteService;
