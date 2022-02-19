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

  async createMany({ data }: { data: newPublishingCompany[] }): Promise<number> {
    const { count: howManyAdded } = await prismaClient.publishingCompany
      .createMany({ data });

    return howManyAdded;
  }

  async update(id: number, { data }: { data: newPublishingCompany }): Promise<publishingCompany> {
    const updatedPublishingCompany = await prismaClient.publishingCompany
      .update({
        where: { id },
        data,
      });

    return updatedPublishingCompany;
  }

  async delete(id: number): Promise<publishingCompany> {
    const deletedPublishingCompany = await prismaClient.publishingCompany
      .delete({ where: { id } });

    return deletedPublishingCompany;
  }
};

export default PublishingCompany;
