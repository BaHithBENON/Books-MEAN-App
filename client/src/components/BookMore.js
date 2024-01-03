// BookList.js
import React, { useState } from 'react'; 
import { useLocation } from 'react-router-dom';

const BookMore = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [ book ] = useState(() => {
        const bookParameter = searchParams.get('book');
        return JSON.parse(bookParameter);
    });
    

    return (
        <div className="container my-5">
            <div className="modal-body">
                <h3 className='ms-4 fw-bold my-4'>Plus de détails</h3>
                <p className="ms-4"> 
                    <span>#</span> 
                    <span className="fw-bold font-weight-bold  text-primary">isbn13 : </span> 
                    {book.title}
                </p>
                <p className="ms-4"> 
                    <span>#</span> 
                    <span className="fw-bold font-weight-bold  text-primary">isbn13 : </span> 
                    {book.isbn13}
                </p>
                <p className="ms-4"> 
                    <span>#</span> 
                    <span className="fw-bold font-weight-bold  text-primary">isbn10 : </span> 
                    {book.isbn10}
                </p>
                <p className="ms-4"> 
                    <span>#</span> 
                    <span className="fw-bold font-weight-bold  text-primary text-small">Autheurs : </span> 
                    {book.authors}
                </p>
                <p className="ms-4"> 
                    <span>#</span> 
                    <span className="fw-bold font-weight-bold  text-primary text-small">Catégories : </span> 
                    <span className="fw-bold text-primary badge bg-dark rounded text-light">{book.categories}</span>
                </p>
                <p className="ms-4"> 
                    <span>#</span> 
                    <span className="fw-bold font-weight-bold  text-primary text-small">Nombre de notes : </span> 
                    {book.ratings_count}
                </p>
                <p className="ms-4"> 
                    <span>#</span> 
                    <span className="fw-bold font-weight-bold  text-primary text-small">Moyenne des notes : </span> 
                    {book.average_rating}
                </p>
                <p className="ms-4"> 
                    <span>#</span> 
                    <span className="fw-bold font-weight-bold text-primary">Description : </span> 
                    {book.description}
                </p>
                <p className="ms-4"> 
                    <span>#</span> 
                    <span className="fw-bold font-weight-bold text-primary">Thumbnail : </span> 
                    {book.thumbnail}
                </p>
            </div>
        </div>
    );
};

export default BookMore;
