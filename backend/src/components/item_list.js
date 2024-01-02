// ItemList.js
import React from 'react';

const ItemList = ({ items, onItemClick }) => {
    return (
        <ul>
        {items.map(item => (
            <li className="feature-item" data-feature-id="books" key={item.id} onClick={() => onItemClick(item.id)}>
            {item.name}
            </li>
        ))}
        </ul>
    );
};

export default ItemList;
