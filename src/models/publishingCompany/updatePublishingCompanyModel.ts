import prismaClient from '../../database/prismaClient';

import { NewPublishingCompany, PublishingCompany } from '../../interfaces/publishingCompany';

const updatePublishingCompany = async (
  { where: { id } }: { where: { id: number } },
  { data }: { data: NewPublishingCompany },
): Promise<PublishingCompany> => {
  const updatedPublishingCompany = await prismaClient.publishingCompany
    .update({
      where: { id },
      data,
    });

  return updatedPublishingCompany;
}

export default updatePublishingCompany;
