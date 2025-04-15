// BookAnMaster.js
import React from 'react';
import { FaceApiMasters } from '../../../FaceApi/FaceApiMaster';

export default function BookAnMaster({ onSelectMaster }) {
    return (
        <div className='book_an_master'>
            <h2 className='master_title'>Choose a master</h2>
            <ul className='master_wrapper'>
                {FaceApiMasters.map(item => (
                    <li className='master_item' key={item.id} onClick={() => onSelectMaster(item)}>
                        <img className='master_foto' src={item.avatar} alt={item.name} />
                        <h3 className='master_item_title'>{item.name}</h3>
                        <p className='master_price'>$ {item.price}</p>
                        <p className='master_category'>{item.category}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
