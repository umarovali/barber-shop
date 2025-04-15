import React from 'react';
import { FaceApiMasters } from '../../../FaceApi/FaceApiMaster';

export default function MastersAll() {
    return (
        <section className='master'>
            <div className="container">
                <ul className="masters-container">
                    {FaceApiMasters.map((master) => (
                        <li key={master.id} className='master-card'>
                            <img src={master.avatar} alt={master.name} className='master-avatar' />
                            <h2 className='master-name'>{master.name}</h2>
                            <p className='master-experience'>Experience: {master.experience}</p>
                            <p className='master-price'>Price: ${master.price}</p>
                            <p className='master-category'>Category: {master.category}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
