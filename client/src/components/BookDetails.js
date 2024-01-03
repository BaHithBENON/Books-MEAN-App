// src/components/BookDetails.js
import React from 'react';
import { useApi } from '../context/ApiContext';
import { useNavigate } from 'react-router-dom';

const BookDetails = ({ _id, title, isbn13, isbn10, authors, categories, 
        published_year, num_pages, description, average_rating, ratings_count, thumbnail, onRefresh }) => {
    // Dans votre composant
    const navigate = useNavigate();
    const { deleteItem } = useApi();

    const handleNavigate = () => {
        // Créer un objet avec les données du livre
        const bookData = {
            _id,
            title,
            isbn13,
            isbn10,
            authors,
            categories,
            published_year,
            num_pages,
            description,
            average_rating,
            ratings_count,
            thumbnail
        };

        // Encodage de chaque valeur pour l'URL
        const encodedBookData = Object.entries(bookData).reduce((acc, [key, value]) => {
            acc[key] = encodeURIComponent(value);
            return acc;
        }, {});
        // Naviguer vers la page AddBook avec les données du livre dans l'objet de requête
        navigate(`/add?book=${JSON.stringify(encodedBookData)}`);
    };

    // Fonction pour gérer la sélection d'un livre
    const handleBookSelect = (book) => {
        // Créer un objet avec les données du livre
        const bookData = {
            _id,
            title,
            isbn13,
            isbn10,
            authors,
            categories,
            published_year,
            num_pages,
            description,
            average_rating,
            ratings_count,
            thumbnail
        };

        // Encodage de chaque valeur pour l'URL
        const encodedBookData = Object.entries(bookData).reduce((acc, [key, value]) => {
            acc[key] = encodeURIComponent(value);
            return acc;
        }, {});
        navigate(`/more?book=${JSON.stringify(encodedBookData)}`);
    };

    const handleDelete = async () => {
        // Ajoutez ici la logique pour supprimer le livre
        await deleteItem(_id);
        onRefresh(); // Appel de la fonction de rafraîchissement après la suppression
    };
    

    return (
        <div className="col-md-6 col-12 shadow p-4 rounded btn justify-content-start text-start" 
            data-toggle="modal" data-target={`#infoModal${isbn13}`}>
            <p>
                <span className="fw-bold">~</span>
                <span className="text-warning fw-bold">{'{'}</span> 
                <span className="fw-bold"> {title}</span>
            </p>
            <p className="ms-4"> 
                <span>#</span> 
                <span className="fw-bold text-primary">isbn13 : </span> 
                {isbn13}
            </p>
            <p className="ms-4"> 
                <span>#</span> 
                <span className="fw-bold text-primary">isbn10 : </span> 
                {isbn10}
            </p>
            <p className="ms-4"> 
                <span>#</span> 
                <span className="fw-bold text-primary text-small">by </span> 
                {authors}
            </p>
            <p className="ms-4">
                <span className="fw-bold text-primary badge bg-dark rounded text-light">{categories}</span>
            </p>
            <p>
                <span className="text-warning fw-bold">{'}'}</span> 
                <span className="fw-bold text-primary">~ </span> 
                {published_year} | {num_pages}p <br></br>
                <span className='text-danger badge bg-light' onClick={handleDelete}>Supprimer </span> 
                <span className='text-danger badge bg-success text-light' onClick={handleNavigate}> Update</span>
                <span className='text-danger badge bg-primary text-light' onClick={handleBookSelect}> Plus</span>
            </p> 
        </div>
    );
};

export default BookDetails;