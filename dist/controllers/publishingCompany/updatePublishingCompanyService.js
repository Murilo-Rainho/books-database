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
const publishingCompany_1 = require("../../services/publishingCompany");
const enums_1 = require("../../enums");
const updatePublishingCompanyController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.data;
        const { id } = req.params;
        const editedPublishinCompany = yield (0, publishingCompany_1.updatePublishingCompanyService)(Number(id), data);
        return res.status(enums_1.statusHttp.Ok).json(editedPublishinCompany);
    }
    catch (error) {
        next(error);
    }
});
exports.default = updatePublishingCompanyController;
//# sourceMappingURL=updatePublishingCompanyService.js.map