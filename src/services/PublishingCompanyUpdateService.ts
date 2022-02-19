import { PublishingCompany } from '../models';

import { newPublishingCompany, publishingCompany } from '../interfaces';

class PublishingCompanyUpdateService {
  async handle(id: number, data: newPublishingCompany) {
    const publishingCompanyModel = new PublishingCompany();
    const editedPublishingCompany = await publishingCompanyModel
      .update({ where: { id } }, { data });

    return editedPublishingCompany;
  }
};

export default PublishingCompanyUpdateService;
