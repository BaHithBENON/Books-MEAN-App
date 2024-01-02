// src/context/ApiContext.js
import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ApiContext = createContext();

const API_URL = 'http://127.0.0.1:3000';

export const ApiProvider = ({ children }) => {
    const [apiData, setApiData] = useState([]);
    const [apiDatas, setApiDatas] = useState([]);
    const [apiYears, setBookYears] = useState([]);
    const [apiAuthors, setBookAuthors] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState('');

    const setCategory = useCallback((category) => {
        setSelectedCategory(category);
    }, []);

    const fetchData = async (endpoint, op) => {
        try {
            const response = await fetch(`${API_URL}/${endpoint}`);
            const data = await response.json();
            // Ensure data is always an array
            if(op === 0)
                setApiData(Array.isArray(data) ? data : [data]);
            else if(op === 1)
                setBookYears(Array.isArray(data) ? data : [data]);
            else if(op === 2)
                setBookAuthors(Array.isArray(data) ? data : [data]);
            else
                setApiDatas(Array.isArray(data) ? data : [data]);
        } catch (error) {
            console.error('Erreur lors de la récupération des données API', error);
            if(op === 0 )
                setApiData([]);
            else if(op === 1 )
                setBookYears([]);
            else if(op === 2 )
                setBookAuthors([]);
            else 
                setApiDatas([]);
        }
    };

    const postData = async (endpoint, formData, method) => {
        try {
            const response = await fetch(`${API_URL}/${endpoint}`, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            // Traitez la réponse si nécessaire
            console.log('Données envoyées avec succès:', data);
            return data;
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données:', error);
            return error;
        }
    };

    const deleteItem = async (id) => {
        try {
            // Envoyer la requête DELETE à votre API avec l'ID
            await fetch(`${API_URL}/books/${id}`, {
                method: 'DELETE',
            });

            // Mettre à jour l'état local (par exemple, en refetchant les données)
            // selectFeature(selectedCategory);
        } catch (error) {
            console.error(`Erreur lors de la suppression de l'élément avec l'ID ${id}`, error);
        }
    };

    const selectFeature = useCallback((feature) => {
        // Utilisez la fonctionnalité sélectionnée pour construire l'endpoint
        const endpoint = feature === 'all' ? 'books' : `books/${feature}`;
        fetchData(endpoint, 0);
        setCategory(feature);
    }, [setCategory]);

    const getCategories = useCallback(() => {
        // Utilisez la fonctionnalité sélectionnée pour construire l'endpoint
        const endpoint =`books/categories`;
        fetchData(endpoint, 3);
    }, []);

    const getYears = useCallback(() => {
        // Utilisez la fonctionnalité sélectionnée pour construire l'endpoint
        const endpoint =`books/years`;
        fetchData(endpoint, 1);
    }, []);

    const getAuthors = useCallback(() => {
        // Utilisez la fonctionnalité sélectionnée pour construire l'endpoint
        const endpoint =`books/authors`;
        fetchData(endpoint, 2);
    }, []);

    useEffect(() => {
        selectFeature('all'); // Charger les données par défaut au montage
        getYears();
        getAuthors();
        getCategories();
    }, [getAuthors, getCategories, getYears, selectFeature]);

    return (
        <ApiContext.Provider value={{ 
            apiData, selectFeature, 
            apiDatas, getCategories, 
            selectedCategory, setCategory,
            apiYears, setBookYears, getYears,
            apiAuthors, setBookAuthors, getAuthors,
            //
            postData, deleteItem
        }}>
            {children}
        </ApiContext.Provider>
    );
};

export const useApi = () => useContext(ApiContext);
