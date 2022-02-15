import prismaClient from '../database/prismaClient';

class PublishingCompany {
  async getAll() {
    const allPublishingCompanies = await prismaClient.publishingCompany.findMany();

    return allPublishingCompanies;
  }
};

export default PublishingCompany;
