"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fixOpeningDateFunc = (data) => {
    const editedOpeningDate = new Date(data.openingDate);
    const { corporateName, fantasyName, address, cellphone, } = data;
    return {
        corporate_name: corporateName,
        fantasy_name: fantasyName,
        address,
        cellphone,
        opening_date: editedOpeningDate,
    };
};
class FixOpeningDateType {
    handler(req, _res, next) {
        try {
            const data = req.body;
            let editedData;
            if (!Array.isArray(data)) {
                editedData = fixOpeningDateFunc(data);
            }
            else {
                editedData = data.map(fixOpeningDateFunc);
            }
            req.data = editedData;
            next();
        }
        catch (error) {
            next(error);
        }
    }
}
;
exports.default = FixOpeningDateType;
//# sourceMappingURL=FixOpeningDateType.js.map