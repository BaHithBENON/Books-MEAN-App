const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  isbn13: { type: Number, required: true },
  isbn10: { type: Number, required: true },
  title: { type: String, required: true },
  authors: { type: String, required: true },
  categories: { type: String, required: true },
  thumbnail: { type: String, required: true },
  description: { type: String, required: true },
  published_year: { type: Number, required: true },
  average_rating: { type: Number, required: true },
  num_pages: { type: Number, required: true },
  ratings_count: { type: Number, required: true },
}, { collection: 'datas' });

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;