// src/components/BookForm.js
import React, { useState } from 'react';

const BookForm = ({ initialFormData, onSubmit }) => {
    // State pour stocker les valeurs du formulaire
    const [formData, setFormData] = useState(initialFormData);

    // Fonction pour mettre à jour le state lors de la saisie dans le formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        // Appel de la fonction onSubmit passée en tant que prop avec les données du formulaire
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="isbn13" className="form-label fw-bold"> ISBN13 </label>
                <input
                    type="number"
                    className="form-control"
                    id="isbn13"
                    name="isbn13"
                    value={formData.isbn13}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="isbn10" className="form-label fw-bold"> ISBN10 </label>
                <input
                    type="number"
                    className="form-control"
                    id="isbn10"
                    name="isbn10"
                    value={formData.isbn10}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="title" className="form-label fw-bold"> Title </label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="authors" className="form-label fw-bold"> Authors </label>
                <input
                    type="text"
                    className="form-control"
                    id="authors"
                    name="authors"
                    value={formData.authors}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="categories" className="form-label fw-bold"> Categories </label>
                <input
                    type="text"
                    className="form-control"
                    id="categories"
                    name="categories"
                    value={formData.categories}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="thumbnail" className="form-label fw-bold"> Thumbnail URL </label>
                <input
                    type="text"
                    className="form-control"
                    id="thumbnail"
                    name="thumbnail"
                    value={formData.thumbnail}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="description" className="form-label fw-bold"> Description </label>
                <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>

            <div className="mb-3">
                <label htmlFor="published_year" className="form-label fw-bold">
                Published Year
                </label>
                <input
                type="number"
                className="form-control"
                id="published_year"
                name="published_year"
                value={formData.published_year}
                onChange={handleChange}
                required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="average_rating" className="form-label fw-bold"> Average Rating </label>
                <input
                    type="number"
                    className="form-control"
                    id="average_rating"
                    name="average_rating"
                    value={formData.average_rating}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="num_pages" className="form-label fw-bold"> Number of Pages </label>
                <input
                    type="number"
                    className="form-control"
                    id="num_pages"
                    name="num_pages"
                    value={formData.num_pages}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="ratings_count" className="form-label fw-bold"> Ratings Count </label>
                <input
                    type="number"
                    className="form-control"
                    id="ratings_count"
                    name="ratings_count"
                    value={formData.ratings_count}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit" className="btn btn-primary">Valider</button>
        </form>
    );
};

export default BookForm;
