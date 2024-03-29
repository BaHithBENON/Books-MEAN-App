const express = require('express');
const router = express.Router();

const Book = require('../models/book_model');

// Ajouter une donnée
async function addData(req, res) {
    try {
        const data = new Book(req.body);
        await data.save();
        return res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtenir toutes les données
async function getDatas(req, res) {
    try {
        const datas = await Book.find();
        res.json(datas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtenir une donnée spécifique
async function getData(req, res) {
    try {
        const data = await Book.findById(req.params.id);
        if (!data) {
        return res.status(404).json({ message: 'Data not found' });
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Mettre à jour une donnée
async function updateData(req, res) {
    try {
        const data = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        return res.json({message : data});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

// Supprimer une donnée
async function deleteData(req, res) {
    try {
        const data = await Book.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.json({ message: 'Data deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Recherche par catégorie
async function getDataByCategory(req, res) {
    try {
        const category = req.params.category;
        const data = await Book.find({ categories: category });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Filtrage par année de publication
async function getDataByYear(req, res) {
    try {
        const year = req.params.year;
        const data = await Book.find({ published_year: year });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Tri par note moyenne
async function getDataByRating(req, res) {
    try {
        const data = await Book.find().sort({ average_rating: -1 });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Pagination des résultats
async function getPaginatedData(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;
        const data = await Book.find().skip((page - 1) * pageSize).limit(pageSize);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Agrégation pour la moyenne des notes
async function getAverageRating(req, res) {
    try {
        const result = await Book.aggregate([
            {
            $group: {
                _id: null,
                averageRating: { $avg: '$average_rating' }
            }
            }
        ]);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Filtrage par nombre de pages
async function getDataByPages(req, res) {
    try {
        const minPages = parseInt(req.query.minPages) || 0;
        const data = await Book.find({ num_pages: { $gte: minPages } });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Agrégation pour les statistiques
async function getStatistics(req, res) {
    try {
        const result = await Book.aggregate([
            {
            $group: {
                _id: null,
                totalBooks: { $sum: 1 },
                averageRating: { $avg: '$average_rating' }
            }
            }
        ]);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Recherche texte intégral
async function searchByText(req, res) {
    try {
        const keyword = req.query.keyword;
        const data = await Book.find({ $text: { $search: keyword } });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// Route pour récupérer toutes les catégories de livres
async function getAllCategories(req, res) {
    try {
        const limit = 5; // Définir le nombre de catégories souhaité
        const categories = await Book.distinct('categories');
        res.json(categories);
    } catch (error) {        
        console.error('Erreur lors de la récupération des catégories', error);
        res.status(500).json({ error: error.message });
    }
}

// Route pour récupérer tous les auteurs de livres
async function getAllAuthors(req, res) {
    try {
        const limit = 5; // Définir le nombre de catégories souhaité
        const authors = await Book.distinct('authors');
        res.json(authors);
    } catch (error) {        
        console.error('Erreur lors de la récupération des auteurs', error);
        res.status(500).json({ error: error.message });
    }
}

// Route pour récupérer toutes les années de publications de livres
async function getAllYears(req, res) {
    try {
        const limit = 5; // Définir le nombre de catégories souhaité
        const years = await Book.distinct('published_year');
        res.json(years);
    } catch (error) {        
        console.error('Erreur lors de la récupération des années de pubs', error);
        res.status(500).json({ error: error.message });
    }
}



module.exports = {
    getDatas,
    addData,
    getData,
    deleteData,
    updateData,
    getDataByCategory,
    getDataByYear,
    getDataByRating,
    getPaginatedData,
    getAverageRating,
    getDataByPages,
    getStatistics,
    searchByText,
    getAllCategories,
    getAllAuthors,
    getAllYears
};
