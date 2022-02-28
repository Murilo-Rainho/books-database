import { Response, NextFunction } from 'express';

import { CustomRequest } from '../../interfaces';

import { NewPublishingCompany, WrongPublishingCompanyOpeningDateType } from '../../interfaces/publishingCompany';

const fixOpeningDateFunc = (data: WrongPublishingCompanyOpeningDateType): NewPublishingCompany => {
  const editedOpeningDate = new Date(data.openingDate);

  const {
    corporateName,
    fantasyName,
    address,
    cellphone,
  } = data;

  return {
    corporate_name: corporateName,
    fantasy_name: fantasyName,
    address,
    cellphone,
    opening_date: editedOpeningDate,
  };
};

const fixOpeningDateType = (
  req: CustomRequest,
  _res: Response,
  next: NextFunction
): void => {
  try {
    const data = req.body as WrongPublishingCompanyOpeningDateType;
    let editedData: NewPublishingCompany | NewPublishingCompany[];

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
};

export default fixOpeningDateType;
