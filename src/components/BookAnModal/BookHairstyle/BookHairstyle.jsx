import React, { useState } from 'react';
import { FaceApiHairstyle } from '../../../FaceApi/FaceApiHairstyle';

export default function BookHairstyle({ onSelectHairstyle }) {
    const [selectedCategory, setSelectedCategory] = useState('For short hair');


    const filteredHairstyles = FaceApiHairstyle.filter(hairstyle => hairstyle.category === selectedCategory);


    return (
        <div className='book_an_hairstyle'>
            <h1 className='hairstyle_title'>Choose a Hairstyle</h1>
            <div className='hairstyle_catgory'>
                <button className='hairstyle_btn' onClick={() => setSelectedCategory('For short hair')}>Short hair</button>
                <button className='hairstyle_btn' onClick={() => setSelectedCategory('For middle hair')}>Medium hair</button>
                <button className='hairstyle_btn' onClick={() => setSelectedCategory('For long hair')}>Long hair</button>
            </div>
            <ul className='hairstyle_wrapper'>
                {filteredHairstyles.map(hairstyle => (
                    <li className='hairstyl_item' key={hairstyle.id} onClick={() => onSelectHairstyle(hairstyle)}>
                        <img className='hairstyl_item_foto' src={hairstyle.img} alt={hairstyle.title} />
                        <div className="hairstyle_content">
                            <h2 className='hairstyl_item_title'>{hairstyle.title}</h2>
                            <p className='hairstyl_item_suptitle'>{hairstyle.suptitle}</p>
                        </div>
                    </li>
                ))}
                <button className='hairstyl_item_btn' onClick={() => onSelectHairstyle('Consultation')}>I want a consultation</button>
            </ul>
        </div>
    );
}
