import { Response, Request, NextFunction } from 'express';

import { newPublishingCompany, wrongPublishingCompanyOpeningDateType } from '../interfaces';

const fixOpeningDateFunc = (data: wrongPublishingCompanyOpeningDateType): newPublishingCompany => {
  const editedOpeningDate = new Date(data.openingDate);

  const {
    corporateName,
    fantasyName,
    address,
    cellphone,
  } = data;

  return {
    corporateName,
    fantasyName,
    address,
    cellphone,
    openingDate: editedOpeningDate,
  };
};

class FixOpeningDateType {
  handler(
    req: Request,
    _res: Response,
    next: NextFunction
  ): void {
    try {
      const data = req.body;
      let editedData: newPublishingCompany | newPublishingCompany[];

      if (!Array.isArray(data)) {
        editedData = fixOpeningDateFunc(data);
      } else {
        editedData = data.map(fixOpeningDateFunc);
      }

      req.data = editedData;

      next()
    } catch (error) {
      next(error);
    }
  }
};

export default FixOpeningDateType;
