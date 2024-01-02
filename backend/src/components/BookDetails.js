// src/components/BookDetails.js
import React from 'react';

const BookDetails = ({ title, isbn13, isbn10, author, genre, year, pages }) => {
    return (
        <div className="col-md-6 col-12 shadow p-4 rounded btn text-left" data-toggle="modal" data-target="#infoModal">
            <div>
                <p>
                    <span className="font-weight-bold">~</span>
                    <span className="text-warning font-weight-bold">{'{'}</span> 
                    <span className="font-weight-bold">{title}</span>
                </p>
                <p className="ml-4"> 
                    <span>#</span> 
                    <span className="font-weight-bold text-primary">isbn13 :</span> 
                    {isbn13}
                </p>
                <p className="ml-4"> 
                    <span>#</span> 
                    <span className="font-weight-bold text-primary">isbn10 :</span> 
                    {isbn10}
                </p>
                <p className="ml-4"> 
                    <span>#</span> 
                    <span className="font-weight-bold text-primary text-small">By </span> 
                    {author}
                </p>
                <p className="ml-4">
                    <span className="font-weight-bold text-primary badge badge-dark rounded text-light">{genre}</span>
                </p>
                <p>
                    <span className="text-warning font-weight-bold">{'}'}</span> 
                    <span className="font-weight-bold text-primary">~</span> 
                    {year} | {pages}p
                </p>
            </div>
        </div>
    );
};

export default BookDetails;