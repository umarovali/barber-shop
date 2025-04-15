// BookShavingServices.js
import React from 'react';
import { FaceApiService } from '../../../FaceApi/FaceApiService';

export default function BookShavingServices({ onSelectService }) {
    const shavingServices = FaceApiService.filter(service => service.service === "Shaving services");

    return (
        <div className='book_main_services'>
            <h2 className='services_title'>Shaving Services</h2>
            <ul className='services_wrapper'>
                {shavingServices.map(service => (
                    <li className='services_item' key={service.id} onClick={() => onSelectService(service, 'selectedShavingService')}>
                        <h3 className='services_item_title'>{service.title}</h3>
                        <p className='services_item_suptitle'>{service.suptitle}</p>
                        <p className='services_item_price'>$ {service.price}</p>
                    </li>
                ))}
                <button className='services_btn' onClick={() => onSelectService("Skip", 'selectedShavingService')}>Skip</button>
            </ul>
        </div>
    );
}
