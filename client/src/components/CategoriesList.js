import React, { useEffect } from 'react';
import { useApi } from '../context/ApiContext';

const CategoryList = () => {
    const { apiDatas, getCategories, selectFeature, setCategory } = useApi();

    useEffect(() => {
        // Log apiData for debugging
        // console.log(apiDatas);
        
        // Chargez la liste des catégories au montage
        getCategories();
    }, [getCategories, apiDatas]);

    const handleCategoryChange = (e) => {
        // const selectedCategory = e.target.value;
        selectFeature(`category/${e}`);
        setCategory(e);
    };

    // Check if apiData is an array before mapping
    const categoriesArray = Array.isArray(apiDatas) ? apiDatas : []; 

    return (
        <div>
            <h4 className='fw-bold'>Catégories</h4>
            <p>Cliquez sur une catégorie pour voir les livres contenus</p>
            <div className='rounded bg-warning text-white p-2'>
                {categoriesArray.map((item, index) => (
                    <span key={index} className='cursor-pointer badge bg-dark block ms-2' onClick={() => handleCategoryChange(item)}> {item} </span>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
