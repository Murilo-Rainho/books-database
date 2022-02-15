"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
// get all publishing companies
const publishingCompanyGetAllController = new controllers_1.PublishingCompanyGetAllController();
router.get('/', publishingCompanyGetAllController.handler);
exports.default = router;
//# sourceMappingURL=publishingCompany.js.map