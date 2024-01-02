// src/components/FeatureList.js
import React from 'react';

const FeatureList = () => {
    return (
        <div className="col-lg-4 p-4">
            <p className="font-weight-bold h5">Fonctionnalités.</p>
            <ul>
                <li className="feature-item" data-feature-id="books">Tous les livres</li>
                <li className="feature-item" data-feature-id="pages">Pages 2</li>
                <li className="feature-item" data-feature-id="rating">Rating</li>
            </ul>
        </div>
    );
};

export default FeatureList;