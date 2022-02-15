"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routers_1 = require("../routers");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use('/publishingCompany', routers_1.publishingCompanyRouter);
app.get('/ping', (_req, res, _next) => {
    res.status(200).json({ message: 'pong' });
});
exports.default = app;
//# sourceMappingURL=app.js.map