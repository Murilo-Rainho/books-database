import { updatePublishingCompanyModel } from '../../models/publishingCompany';

import { NewPublishingCompany, PublishingCompany } from '../../interfaces/publishingCompany';

const updatePublishingCompanyService = async (
  id: number,
  data: NewPublishingCompany,
): Promise<PublishingCompany> => {
  const editedPublishingCompany = await updatePublishingCompanyModel({ where: { id } }, { data });

  return editedPublishingCompany;
};

export default updatePublishingCompanyService;
