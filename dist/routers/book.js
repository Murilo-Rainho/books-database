"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_1 = require("../controllers/book");
const router = (0, express_1.Router)();
// get all books
router.get('/', book_1.getAllBooksController);
// post one book
router.post('/', book_1.createOneBookController);
exports.default = router;
