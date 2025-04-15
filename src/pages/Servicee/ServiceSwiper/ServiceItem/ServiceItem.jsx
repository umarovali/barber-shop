import React, { useState } from 'react';
import { FaceApiService } from '../../../../FaceApi/FaceApiService';
import { TiArrowRight } from "react-icons/ti";

export default function ServiceItem({ category }) {
    const [visibleDetails, setVisibleDetails] = useState(null);

    const mainServices = FaceApiService.filter(item => item.service === category);

    const toggleDetails = (id) => {
        setVisibleDetails(visibleDetails === id ? null : id);
    };

    return (
        <ul className="sevice_box">
            <h5 className="sevice_type">{category}</h5>
            {mainServices.map(item => (
                <li key={item.id} className="sevice_card">
                    <div className='service_card_text'>
                        <h3 className='sevice_name'>{item.title}</h3>
                        <p className='service_card_details' onClick={() => toggleDetails(item.id)}>
                            Details <TiArrowRight />
                        </p>
                    </div>

                    {visibleDetails === item.id && (
                        <p className='servise_suptitle'>{item.suptitle}</p>
                    )}

                    <p className="service_price">$ {item.price}</p>
                </li>
            ))}
        </ul>
    );
}
