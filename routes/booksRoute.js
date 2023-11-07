const express = require('express');
const router = express.Router();
const { addNewBook, getAllBooks } = require('../controllers/booksController');

router.route('/').post(addNewBook).get(getAllBooks);

module.exports = router