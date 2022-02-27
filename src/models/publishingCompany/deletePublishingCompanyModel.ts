import prismaClient from '../../database/prismaClient';

import { PublishingCompany } from '../../interfaces/publishingCompany';

const deletePublishingCompanyModel = async (
  { where: { id } }: { where: { id: number } },
): Promise<PublishingCompany> => {
  const deletedPublishingCompany = await prismaClient.publishingCompany
    .delete({ where: { id } });

  return deletedPublishingCompany;
};

export default deletePublishingCompanyModel;
