import React, { useEffect } from 'react';
import { useApi } from '../context/ApiContext';

const CategoryDropdown = () => {
    const { apiData, selectFeature } = useApi();

    useEffect(() => {
        // Log apiData for debugging
        console.log(apiData);
        // Chargez la liste des catégories au montage
        selectFeature('categories');
    }, [selectFeature, apiData]);

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        selectFeature(`category/${selectedCategory}`);
    };

    // Check if apiData is an array before mapping
    const categoriesArray = Array.isArray(apiData) ? apiData : [];

    return (
        <div>
            <label htmlFor="categoryDropdown">Choose a category: </label>
            <select id="categoryDropdown" onChange={handleCategoryChange}>
                {categoriesArray.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategoryDropdown;
