// src/components/DetailsSection.js
import React, { useState } from 'react';
import BookDetails from './BookDetails';
import { useApi } from '../context/ApiContext';
import { useNavigate } from 'react-router-dom';

const DetailsSection = ({ onBookSelect }) => {
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(false);

    const { apiData, selectedCategory } = useApi();

    // Fonction pour gérer la sélection d'un livre
    const handleBookSelect = (book) => {
        onBookSelect(book);
    };

    const handleNavigate = () => {
        // Naviguer vers la page AddBook avec les données du livre dans l'objet de requête
        navigate(`/add`);
    };

    const handleRefresh = () => {
        // Inverser l'état de rafraîchissement
        setRefresh(!refresh);
    };
    
    return (
        <div className="col-lg-8 p-4">
            <div className="d-flex justify-content-between align-items-center">
                <p className="h1 fw-bold">Details.</p>
                <button type='button' className="rounded text-danger bg-success text-light" onClick={handleNavigate}>
                    Ajouter
                </button>
            </div>

            <br/>
            <div className="row">
                <div className="col-md-12">
                    <p> <span className="text-success fw-bold">#</span> 
                        <span className="fw-bold"> {selectedCategory}</span> <br></br>
                        <span className='fw-bold'> ~ {apiData.length} Elément(s)</span>
                    </p>
                </div>
            </div>
            <div className="row col-md-12 rounded py-4">
                {apiData.map((book) => (
                    <BookDetails key={book.id} {...book} onRefresh={handleRefresh} onClick={() => handleBookSelect(book)} />
                ))}
            </div>
        </div>
    );
};

export default DetailsSection;
