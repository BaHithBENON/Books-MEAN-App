// routes.js
const express = require('express');
const apiManager = require('../db/api.js');
const bookApiManager = require('../db/book_api.js');
const router = express.Router();

//routes pour produits
router.get('/products', apiManager.getProducts);
router.post('/products', apiManager.addProduct);
router.put('/products/:id', apiManager.updateProduct);
router.delete('/products/:id', apiManager.deleteProduct);
router.get('/products/:id', apiManager.getProduct);



// Routes supplémentaires pour les opérations étendues
router.get('/books/category/:category', bookApiManager.getDataByCategory);
router.get('/books/year/:year', bookApiManager.getDataByYear);
router.get('/books/rating', bookApiManager.getDataByRating);
router.get('/books/paginated', bookApiManager.getPaginatedData);
router.get('/books/average-rating', bookApiManager.getAverageRating);
router.get('/books/pages', bookApiManager.getDataByPages);
router.get('/books/statistics', bookApiManager.getStatistics);
router.get('/books/search', bookApiManager.searchByText);

// Ajoutez la route pour récupérer toutes les catégories
router.get('/books/categories', bookApiManager.getAllCategories);
// Ajoutez la route pour récupérer toutes les auteurs
router.get('/books/authors', bookApiManager.getAllAuthors);
// Ajoutez la route pour récupérer toutes les années
router.get('/books/years', bookApiManager.getAllYears);


// Nouvelles routes pour les données
router.get('/books', bookApiManager.getDatas);
router.post('/books', bookApiManager.addData);
router.put('/books/:id', bookApiManager.updateData);
router.delete('/books/:id', bookApiManager.deleteData);
router.get('/books/:id', bookApiManager.getData);

module.exports = router;
