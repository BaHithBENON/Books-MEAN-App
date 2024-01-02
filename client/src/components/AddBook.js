// src/components/DetailsSection.js
import React, { useState } from 'react'; 
import { useApi } from '../context/ApiContext';
import BookForm from './BookForm';
import { useLocation } from 'react-router-dom';

const AddBook = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [ method, setMethod ] = useState(null);

    const { postData } = useApi();
    const [formData, setFormData] = useState(() => {
        const bookParameter = searchParams.get('book');
        if(bookParameter != null) {
            setMethod('PUT');
            return JSON.parse(bookParameter);
        } else {
            setMethod('POST');
            return {
                isbn13: '',
                isbn10: '',
                title: '',
                authors: '',
                categories: '',
                thumbnail: '',
                description: '',
                published_year: '',
                average_rating: '',
                num_pages: '',
                ratings_count: '',
            };
        }
    });

    const [result, setResult] = useState('');
    // Fonction pour traiter les données du formulaire
    const handleFormSubmit = async (formData) => {
        // Ajoutez ici la logique pour traiter les données du formulaire, par exemple, en les envoyant à votre backend
        console.log(formData);
        // Appel de la fonction postData pour envoyer les données du formulaire
        try {
            if(formData._id) {
                const response =  await postData(`books/${formData._id}`, formData, method);
                setResult(JSON.stringify(response.message, null, 2)); 
            } else {
                const response =  await postData(`books`, formData, method);
                setResult(JSON.stringify(response.message, null, 2)); 
            }       
        } catch (error) {
            setResult(error); 
        }
        // Réinitialisez le formulaire après la soumission si nécessaire
        setFormData({
            isbn13: '',
            isbn10: '',
            title: '',
            authors: '',
            categories: '',
            thumbnail: '',
            description: '',
            published_year: '',
            average_rating: '',
            num_pages: '',
            ratings_count: '',
        });
    };
    
    return (
        <div className="container py-5">
            <h4 className='fw-bold'>Ajouter un livre</h4>
            <div className='row'>
                <div className='col-md-6 col-12 my-4'>
                    <BookForm initialFormData={formData} onSubmit={handleFormSubmit} />
                </div>
                <div className='col-md-6 col-12 my-5'>
                    <div className='rounded bg-dark text-light p-4'>
                        {result && typeof result === 'object' ? (
                            <div>{result}</div>
                        ) : (
                            <div>{result}</div>
                        )}    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBook;
