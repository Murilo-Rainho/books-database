import { createOnePublishingCompanyModel } from '../../models/publishingCompany'

import { NewPublishingCompany, PublishingCompany } from '../../interfaces/publishingCompany';

const createOnePublishingCompanyService = async (data : NewPublishingCompany): Promise<PublishingCompany> => {
  const newPublishingCompany = await createOnePublishingCompanyModel({ data });

  return newPublishingCompany;
};

export default createOnePublishingCompanyService;
