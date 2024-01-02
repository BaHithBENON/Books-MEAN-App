// BookList.js
import React from 'react';

const BookMore = ({ book }) => {
    return (
    <div class="modal fade" id={`infoModal${book.isbn13}`} tabindex="-1" role="dialog" 
        aria-labelledby={`exModalLabel${book.isbn13}`} aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Informations importantes</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p> 
                        <span>#</span> 
                        <span class="font-weight-bold text-primary">Notes [</span>  {book.ratings_count}
                        <span class="font-weight-bold text-primary">-/-</span> {book.average_rating}
                        <span class="font-weight-bold text-primary">]</span>
                    </p>
                    <p> 
                        <span>#</span> 
                        <span class="font-weight-bold text-primary">description :</span> 
                        {book.description}
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default BookMore;