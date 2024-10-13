const express = require('express');
const { addBook, getAllBooks, borrowBook } = require('../controllers/bookController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/books', protect, addBook);
router.get('/books', getAllBooks);
router.post('/books/:bookId/borrow', protect, borrowBook);

module.exports = router;
