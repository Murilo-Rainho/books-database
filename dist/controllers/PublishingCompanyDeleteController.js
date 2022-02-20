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
class PublishingCompanyDeleteController {
    handler(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const publishingCompanyDeleteService = new services_1.PublishingCompanyDeleteService();
                const { id } = req.params;
                const deletedPublishingCompany = yield publishingCompanyDeleteService.handle(Number(id));
                return res.status(enums_1.statusHttp.Ok).json(deletedPublishingCompany);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
;
exports.default = PublishingCompanyDeleteController;
//# sourceMappingURL=PublishingCompanyDeleteController.js.map