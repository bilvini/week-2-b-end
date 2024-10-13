const { books, users } = require('../config/db');
const Book = require('../models/Book');

const addBook = (bookData) => {
    const book = new Book(bookData.title, bookData.author);
    books.push(book);
    return book;
};

const getAllBooks = () => {
    return books;
};

const borrowBook = (userId, bookId) => {
    const book = books.find(b => b.id === bookId);
    const user = users.find(u => u.id === userId);
    if (!book || !book.available) throw new Error('Book not available');

    book.available = false;
    user.borrowedBooks.push(bookId);
};

module.exports = { addBook, getAllBooks, borrowBook };
