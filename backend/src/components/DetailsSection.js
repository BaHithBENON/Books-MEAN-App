// src/components/DetailsSection.js
import React from 'react';
import BookDetails from './BookDetails';

const DetailsSection = () => {
    // Exemple de données (à remplacer par vos données réelles)
    const bookDetailsData = {
        title: 'Gilead',
        isbn13: '9780002005883',
        isbn10: '9780002005883',
        author: 'Marilynne Robinson',
        genre: 'Fiction',
        year: '2004',
        pages: '297',
    };
    
    return (
        <div className="col-lg-8 p-4">
            <p className="h1 font-weight-bold">Details.</p>
            <br/>
            <div className="row">
                <div className="col-md-12">
                    <p> <span className="text-success font-weight-bold">#</span> 
                        <span className="font-weight-bold">Agrégation pour les statistiques</span> 
                    </p>
                </div>
            </div>
            <div className="row col-md-12 rounded py-4">
                <BookDetails {...bookDetailsData} />
            </div>
        </div>
    );
};

export default DetailsSection;
