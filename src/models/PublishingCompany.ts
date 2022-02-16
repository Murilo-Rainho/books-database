import prismaClient from '../database/prismaClient';

import { newPublishingCompany, publishingCompany } from '../interfaces';

class PublishingCompany {
  async getAll(): Promise<publishingCompany[]> {
    const allPublishingCompanies = await prismaClient.publishingCompany.findMany();

    return allPublishingCompanies;
  }

  async createOne({ data }: { data: newPublishingCompany }): Promise<publishingCompany> {
    const createdPublishingCompany = await prismaClient.publishingCompany
      .create({ data });

    return createdPublishingCompany;
  }
};

export default PublishingCompany;
