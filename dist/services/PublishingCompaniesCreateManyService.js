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
const models_1 = require("../models");
class PublishingCompaniesCreateManyService {
    handle(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const publishingCompanyModel = new models_1.PublishingCompany();
            const newPublishingCompany = yield publishingCompanyModel
                .createMany({ data });
            return newPublishingCompany;
        });
    }
}
;
exports.default = PublishingCompaniesCreateManyService;
//# sourceMappingURL=PublishingCompaniesCreateManyService.js.map