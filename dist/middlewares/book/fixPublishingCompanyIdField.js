"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fixPublishingCompanyIdField = (req, _res, next) => {
    try {
        const { isbn, title, price, category, publishingCompanyId, } = req.body;
        const editedData = {
            isbn,
            title,
            price,
            category,
            publishing_company_id: publishingCompanyId,
        };
        req.data = editedData;
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.default = fixPublishingCompanyIdField;
