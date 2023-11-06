const express = require('express');
const router = express.Router();
const { addNewBook } = require('../controllers/booksController');

router.route('/').post(addNewBook);

module.exports = router