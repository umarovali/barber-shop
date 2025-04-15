// BookAdditionalServices.js
import React from 'react';
import { FaceApiService } from '../../../FaceApi/FaceApiService';

export default function BookAdditionalServices({ onSelectService }) {
    const additionalServices = FaceApiService.filter(service => service.service === "Additional services");

    return (
        <div className='book_main_services'>
            <h2 className='services_title'>Additional Services</h2>
            <ul className='services_wrapper'>
                {additionalServices.map(service => (
                    <li className='services_item' key={service.id} onClick={() => onSelectService(service, 'selectedAdditionalService')}>
                        <h3 className='services_item_title'>{service.title}</h3>
                        <p className='services_item_suptitle'>{service.suptitle}</p>
                        <p className='services_item_price'>$ {service.price}</p>
                    </li>
                ))}
                <button className='services_btn' onClick={() => onSelectService({ title: "Skip", price: 0 }, 'selectedAdditionalService')}>Skip</button>
            </ul>
        </div>
    );
}
