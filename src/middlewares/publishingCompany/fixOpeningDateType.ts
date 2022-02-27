import { Response, Request, NextFunction } from 'express';

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
  req: Request,
  _res: Response,
  next: NextFunction
): void => {
  try {
    const data = req.body;
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
