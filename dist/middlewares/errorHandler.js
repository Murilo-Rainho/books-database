"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (error, _req, res, _next) => {
    // console.log(error);
    const returnResponse = {
        message: `Something went wrong: ${error.message}`,
    };
    return res.status(500).json(returnResponse);
};
exports.default = errorHandler;
//# sourceMappingURL=errorHandler.js.map