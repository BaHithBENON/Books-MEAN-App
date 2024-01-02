// src/components/FeatureList.js
import React from 'react';
import { useApi } from '../context/ApiContext';
import CategoryList from './CategoriesList';

const FeatureList = () => {

    const { selectFeature } = useApi();

    return (
        <div className="col-lg-4 p-4">
            <p className="fw-bold h5">Fonctionnalités.</p>
            <ul>
                <li 
                    className="feature-item cursor-pointer" 
                    data-feature-id="books"
                    onClick={() => selectFeature('all')}
                >
                    Tous les livres
                </li>
                <li 
                    className="feature-item cursor-pointer" 
                    data-feature-id="category"
                    onClick={() => selectFeature('pages')}
                >
                    Tous les livres par pages
                    
                </li>
                <li 
                    className="feature-item cursor-pointer" 
                    data-feature-id="category"
                    onClick={() => selectFeature('rating')}
                >
                    Tous les livres par notes
                    
                </li>
                <li
                    className="feature-item cursor-pointer"
                    data-feature-id="year"
                    onClick={() => selectFeature('year/2004')}
                >
                    Tous les livres de l'année 2004
                </li>
                <li
                    className="feature-item cursor-pointer"
                    data-feature-id="year"
                    onClick={() => selectFeature('year/2010')}
                >
                    Tous les livres de l'année 2010
                </li>
                <li
                    className="feature-item cursor-pointer"
                    data-feature-id="year"
                    onClick={() => selectFeature('year/2008')}
                >
                    Tous les livres de l'année 2008
                </li>
                <li
                    className="feature-item cursor-pointer"
                    data-feature-id="year"
                    onClick={() => selectFeature('year/2015')}
                >
                    Tous les livres de l'année 2015
                </li>
            </ul>
            <CategoryList />
        </div>
    );
};

export default FeatureList;