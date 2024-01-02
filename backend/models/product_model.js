const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prix: { type: Number, required: true },
  description: { type: String, required: true },
  categorie: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
