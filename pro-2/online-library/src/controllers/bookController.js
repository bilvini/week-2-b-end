const bookService = require('../services/bookService');
const { formatResponse } = require('../utils/responseFormatter');

const addBook = async (req, res, next) => {
    try {
        const book = await bookService.addBook(req.body);
        res.status(201).json(formatResponse(book));
    } catch (error) {
        next(error);
    }
};

const getAllBooks = async (req, res, next) => {
    try {
        const books = await bookService.getAllBooks();
        res.json(formatResponse(books));
    } catch (error) {
        next(error);
    }
};

const borrowBook = async (req, res, next) => {
    try {
        await bookService.borrowBook(req.user.id, req.params.bookId);
        res.json(formatResponse(null, 'Book borrowed successfully'));
    } catch (error) {
        next(error);
    }
};

module.exports = { addBook, getAllBooks, borrowBook };
