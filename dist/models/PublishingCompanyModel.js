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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismaClient_1 = __importDefault(require("../database/prismaClient"));
class PublishingCompanyModel {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const allPublishingCompanies = yield prismaClient_1.default.publishingCompany.findMany();
            return allPublishingCompanies;
        });
    }
    createOne({ data }) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdPublishingCompany = yield prismaClient_1.default.publishingCompany
                .create({ data });
            return createdPublishingCompany;
        });
    }
    createMany({ data }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { count: howManyAdded } = yield prismaClient_1.default.publishingCompany
                .createMany({ data });
            return howManyAdded;
        });
    }
    update({ where: { id } }, { data }) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedPublishingCompany = yield prismaClient_1.default.publishingCompany
                .update({
                where: { id },
                data,
            });
            return updatedPublishingCompany;
        });
    }
    delete({ where: { id } }) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedPublishingCompany = yield prismaClient_1.default.publishingCompany
                .delete({ where: { id } });
            return deletedPublishingCompany;
        });
    }
}
;
exports.default = PublishingCompanyModel;
//# sourceMappingURL=PublishingCompanyModel.js.map