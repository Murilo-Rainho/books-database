"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const enums_1 = require("../enums");
class PublishingCompanyCreateOneOrManyController {
    handler(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const publishingCompanyCreateOneService = new services_1.PublishingCompanyCreateOneService();
                const publishingCompaniesCreateManyService = new services_1.PublishingCompaniesCreateManyService();
                const data = req.data;
                let allPublishingCompanies;
                if (Array.isArray(data)) {
                    allPublishingCompanies = yield publishingCompaniesCreateManyService.handle(data);
                    return res.status(enums_1.statusHttp.Ok).json(allPublishingCompanies);
                }
                allPublishingCompanies = yield publishingCompanyCreateOneService.handle(data);
                return res.status(enums_1.statusHttp.Ok).json(allPublishingCompanies);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
;
exports.default = PublishingCompanyCreateOneOrManyController;
//# sourceMappingURL=PublishingCompanyCreateOneOrManyController.js.map