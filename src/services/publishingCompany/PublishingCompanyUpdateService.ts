import { PublishingCompanyModel } from '../../models/publishingCompany';

import { NewPublishingCompany, PublishingCompany } from '../../interfaces/publishingCompany';

class PublishingCompanyUpdateService {
  async handle(id: number, data: NewPublishingCompany): Promise<PublishingCompany> {
    const publishingCompanyModel = new PublishingCompanyModel();
    const editedPublishingCompany = await publishingCompanyModel
      .update({ where: { id } }, { data });

    return editedPublishingCompany;
  }
};

export default PublishingCompanyUpdateService;
