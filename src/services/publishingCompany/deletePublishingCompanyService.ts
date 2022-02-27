import { deletePublishingCompanyModel } from '../../models/publishingCompany'

import { PublishingCompany } from '../../interfaces/publishingCompany';

const deletePublishingCompanyService = async (id: number): Promise<PublishingCompany> => {
  const deletedPublishingCompany = await deletePublishingCompanyModel({ where: { id } });

  return deletedPublishingCompany;
};

export default deletePublishingCompanyService;
