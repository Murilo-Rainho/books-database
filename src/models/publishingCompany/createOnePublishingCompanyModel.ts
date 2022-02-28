import prismaClient from '../../database/prismaClient';

import { NewPublishingCompany, PublishingCompany } from '../../interfaces/publishingCompany';

const createOnePublishingCompanyModel = async (
  { data }: { data: NewPublishingCompany },
): Promise<PublishingCompany> => {
  const createdPublishingCompany = await prismaClient
    .publishingCompany.create({ data });

  return createdPublishingCompany;
};

export default createOnePublishingCompanyModel;
