"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FixOpeningDateType {
    handler(req, _res, next) {
        try {
            const { corporateName, openingDate, fantasyName, address, cellphone, } = req.body;
            const editedOpeningDate = new Date(openingDate);
            req.data = {
                corporateName,
                fantasyName,
                address,
                cellphone,
                openingDate: editedOpeningDate,
            };
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