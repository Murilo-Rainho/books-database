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

  async createMany({ data }: { data: newPublishingCompany[] }) {
    const createdPublishingCompanies = await prismaClient.publishingCompany
      .createMany({ data });

    return createdPublishingCompanies;
  }

  async update(id: number, { data }: { data: newPublishingCompany }) {
    const updatedPublishingCompany = await prismaClient.publishingCompany
      .update({
        where: { id },
        data,
      });

    return updatedPublishingCompany;
  }
};

export default PublishingCompany;
