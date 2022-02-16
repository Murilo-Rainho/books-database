import { Response, Request, NextFunction } from 'express';

import { objectError, newPublishingCompany } from '../interfaces';

class FixOpeningDateType {
  handler(
    req: Request,
    _res: Response,
    next: NextFunction
  ): void {
    try {
      const {
        corporateName,
        openingDate,
        fantasyName,
        address,
        cellphone,
      } = req.body;

      const editedOpeningDate = new Date(openingDate);

      req.data = {
        corporateName,
        fantasyName,
        address,
        cellphone,
        openingDate: editedOpeningDate,
      };

      next()
    } catch (error) {
      next(error);
    }
  }
};

export default FixOpeningDateType;
