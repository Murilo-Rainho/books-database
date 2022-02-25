import prismaClient from '../../database/prismaClient';

import { NewPublishingCompany, PublishingCompany } from '../../interfaces/publishingCompany';

class PublishingCompanyModel {
  async getAll(): Promise<PublishingCompany[]> {
    const allPublishingCompanies = await prismaClient.publishingCompany.findMany();

    return allPublishingCompanies;
  }

  async createOne(
    { data }: { data: NewPublishingCompany },
  ): Promise<PublishingCompany> {
    const createdPublishingCompany = await prismaClient.publishingCompany
      .create({ data });

    return createdPublishingCompany;
  }

  async createMany(
    { data }: { data: NewPublishingCompany[] },
  ): Promise<number> {
    const { count: howManyAdded } = await prismaClient.publishingCompany
      .createMany({ data });

    return howManyAdded;
  }

  async update(
    { where: { id } }: { where: { id: number } },
    { data }: { data: NewPublishingCompany },
  ): Promise<PublishingCompany> {
    const updatedPublishingCompany = await prismaClient.publishingCompany
      .update({
        where: { id },
        data,
      });

    return updatedPublishingCompany;
  }

  async delete(
    { where: { id } }: { where: { id: number } },
  ): Promise<PublishingCompany> {
    const deletedPublishingCompany = await prismaClient.publishingCompany
      .delete({ where: { id } });

    return deletedPublishingCompany;
  }
};

export default PublishingCompanyModel;
