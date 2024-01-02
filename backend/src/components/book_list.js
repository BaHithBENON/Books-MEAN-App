// BookList.js
import React from 'react';

const BookList = ({ books }) => {
    return (
        <div>
        {books.map(book => (
            <div  key={book.id} className="book col-md-6 col-12 shadow p-4 rounded btn text-left" data-toggle="modal" data-target="#infoModal{book.isbn13}">
                <p>
                    <span class="font-weight-bold">~</span>
                    <span className="text-warning font-weight-bold">{'{'}</span>
                    <span class="font-weight-bold">{book.title}</span>
                </p>
                <p class="ml-4"> 
                    <span>#</span> 
                    <span class="font-weight-bold text-primary">isbn13 :</span> 
                    {book.isbn13}
                </p>
                <p class="ml-4"> 
                    <span>#</span> 
                    <span class="font-weight-bold text-primary">isbn10 :</span> 
                    {book.isbn10}
                </p>
                <p class="ml-4"> 
                    <span>#</span> 
                    <span class="font-weight-bold text-primary text-small">By </span> 
                    {book.authors}
                </p>
                <p class="ml-4">
                    <span class="font-weight-bold text-primary badge badge-dark rounded text-light">{book.categories}</span>
                </p>
                <p>
                    <span class="text-warning font-weight-bold">{'}'}</span> 
                    <span class="font-weight-bold text-primary">~</span> 
                    {book.published_year} | {book.num_pages}p
                </p>
            </div>
        ))}
        </div>
    );
};

export default BookList;
