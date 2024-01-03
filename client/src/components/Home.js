// src/components/Home.js
import React from 'react';
import FeatureList from './FeatureList';
import DetailsSection from './DetailsSection';

const Home = () => {

    return (
        <div className="container">
            <div className="row">
                <FeatureList />
                <DetailsSection />
            </div>
            <br/><br/><br/>
        </div>
    );
};

export default Home;
