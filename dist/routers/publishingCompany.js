"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const publishingCompany_1 = require("../controllers/publishingCompany");
const publishingCompany_2 = require("../middlewares/publishingCompany");
const router = (0, express_1.Router)();
// get all publishing companies
router.get('/', publishingCompany_1.getAllPublishingCompaniesService);
// post one or many publishing companies
router.post('/', publishingCompany_2.fixOpeningDateType, publishingCompany_1.createOneOrManyPublishingCompanyController);
// edit a publishing company
router.put('/:id', publishingCompany_2.fixOpeningDateType, publishingCompany_1.updatePublishingCompanyService);
// delete a publishing company
router.delete('/:id', publishingCompany_1.deletePublishingCompanyController);
exports.default = router;
//# sourceMappingURL=publishingCompany.js.map