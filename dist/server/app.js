"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routers_1 = require("../routers");
const errorHandler_1 = __importDefault(require("../middlewares/errorHandler"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.get('/ping', (_req, res, _next) => {
    res.status(200).json({ message: 'pong' });
});
app.use('/publishingCompany', routers_1.publishingCompanyRouter);
app.use('/book', routers_1.bookRouter);
app.use(errorHandler_1.default);
exports.default = app;
