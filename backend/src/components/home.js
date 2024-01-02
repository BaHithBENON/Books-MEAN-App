// src/components/Home.js
import React from 'react';
import FeatureList from './FeatureList';
import DetailsSection from './DetailsSection';

const Home = () => {

    // Exemple de données (à remplacer par vos données réelles)
    const bookDetailsData = {
        title: 'Gilead',
        isbn13: '9780002005883',
        isbn10: '9780002005883',
        author: 'Marilynne Robinson',
        genre: 'Fiction',
        year: '2004',
        pages: '247',
    };

    return (
        <div className="container">nlnkj
            <div class="row">
                <FeatureList />
                <DetailsSection />
            </div>
            <br/><br/><br/>
        </div>
    );
};

export default Home;
