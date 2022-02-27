import prismaClient from '../../database/prismaClient';

import { NewPublishingCompany } from '../../interfaces/publishingCompany';

const createManyPublishingCompanies = async (
  { data }: { data: NewPublishingCompany[] },
): Promise<number> => {
  const { count: howManyAdded } = await prismaClient.publishingCompany
  .createMany({ data });

  return howManyAdded;
}

export default createManyPublishingCompanies;
