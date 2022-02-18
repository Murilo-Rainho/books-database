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
class PublishingCompanyUpdateController {
    handler(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const publishingCompanyUpdateService = new services_1.PublishingCompanyUpdateService();
                const data = req.data;
                const id = req.params;
                const editedPublishinCompany = yield publishingCompanyUpdateService
                    .handle(Number(id), data);
                return res.status(200).json(editedPublishinCompany);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
;
exports.default = PublishingCompanyUpdateController;
//# sourceMappingURL=PublishingCompanyUpdateController.js.map