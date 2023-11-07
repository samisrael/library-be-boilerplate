const booksModel = require('../models/bookModel');
const initialData = require('../data/initialData');

const getAllBooks = async (request, response) => {
    try {
        const books = await booksModel.find()
        if (books.length === 0) {
            const initialBook = await booksModel.insertMany(initialData);
        }
        response.status(201).json(books)
    }
    catch (error) {
        response.status(500).json({ message: error.message });
    }
}

const addNewBook = async (request, response) => {
    const newBook = request.body;

    try {
        const existingBook = await booksModel.findOne({ ISBN: newBook.ISBN });

        if (existingBook) {
            return response.status(409).json({ message: 'ISBN Number already exists' })
        }
        const insertedBook = await booksModel.create(newBook)
        return response.status(201).json(insertedBook);
    }
    catch (error) {
        response.send(500).json({ message: error.message });
    }
}

module.exports = { addNewBook, getAllBooks }