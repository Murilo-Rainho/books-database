import { PublishingCompanyModel } from '../models';

import { NewPublishingCompany, PublishingCompany } from '../interfaces';

class PublishingCompanyUpdateService {
  async handle(id: number, data: NewPublishingCompany): Promise<PublishingCompany> {
    const publishingCompanyModel = new PublishingCompanyModel();
    const editedPublishingCompany = await publishingCompanyModel
      .update({ where: { id } }, { data });

    return editedPublishingCompany;
  }
};

export default PublishingCompanyUpdateService;
