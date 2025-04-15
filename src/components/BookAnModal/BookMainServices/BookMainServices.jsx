// BookMainServices.js
import React from 'react';
import { FaceApiService } from '../../../FaceApi/FaceApiService';

export default function BookMainServices({ onSelectService }) {
    const mainServices = FaceApiService.filter(service => service.service === "Main services");

    return (
        <div className='book_main_services'>
            <h2 className='services_title'>Main Services</h2>
            <ul className='services_wrapper'>
                {mainServices.map(service => (
                    <li className='services_item' key={service.id} onClick={() => onSelectService(service, 'selectedMainService')}>
                        <h3 className='services_item_title'>{service.title}</h3>
                        <p className='services_item_suptitle'>{service.suptitle}</p>
                        <p className='services_item_price'>$ {service.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
