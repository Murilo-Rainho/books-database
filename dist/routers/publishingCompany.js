"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
// get all publishing companies
const publishingCompanyGetAllController = new controllers_1.PublishingCompanyGetAllController();
router.get('/', publishingCompanyGetAllController.handler);
// post one or many publishing companies
const publishingCompanyCreateOneOrManyController = new controllers_1.PublishingCompanyCreateOneOrManyController();
const fixOpeningDateType = new middlewares_1.FixOpeningDateType();
router.post('/', fixOpeningDateType.handler, publishingCompanyCreateOneOrManyController.handler);
// edit a publishing company
const publishingCompanyUpdateController = new controllers_1.PublishingCompanyUpdateController();
router.put('/:id', fixOpeningDateType.handler, publishingCompanyUpdateController.handler);
exports.default = router;
//# sourceMappingURL=publishingCompany.js.map