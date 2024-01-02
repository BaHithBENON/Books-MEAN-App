// src/components/Home.js
import React, { useState } from 'react';
import FeatureList from './FeatureList';
import DetailsSection from './DetailsSection';
import BookMore from './BookMore';

const Home = () => {

    const [selectedBook, setSelectedBook] = useState(null);

    // Fonction pour mettre à jour le livre sélectionné
    const handleBookSelect = (book) => {
        setSelectedBook(book);
    };

    return (
        <div className="container">
            <div className="row">
                <FeatureList />
                <DetailsSection  onBookSelect={handleBookSelect} />
            </div>
            <br/><br/><br/>

            {selectedBook && <BookMore book={selectedBook} />}
        </div>
    );
};

export default Home;
