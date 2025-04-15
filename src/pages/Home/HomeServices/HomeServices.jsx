import React, { useState, useEffect, useRef } from 'react';
import { FaceApiService } from '../../../FaceApi/FaceApiService';
import { TiArrowRight } from "react-icons/ti";
import Button from '@mui/material/Button';
import { TbArrowNarrowRight } from "react-icons/tb";
import { Link } from 'react-router-dom';

export default function HomeServices() {
  const [visibleDetails, setVisibleDetails] = useState(null);

  const serviceBoxRef = useRef(null);

  const mainServices = FaceApiService.filter(item => item.service === 'Main services');

  const toggleDetails = (id) => {
    setVisibleDetails(visibleDetails === id ? null : id);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (serviceBoxRef.current && !serviceBoxRef.current.contains(event.target)) {
        setVisibleDetails(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [serviceBoxRef]);

  return (
    <section className='home_services'>
      <div className="container">
        <h4 className='serviuces_title'><span>S</span>ervices</h4>
        <center><p className='services_suptitle'>Unique services, unsurpassed quality, unforgettable style - only in our Barber Shop.</p></center>

        <ul className="sevice_box" ref={serviceBoxRef}>
          <h5 className="sevice_type">Main services</h5>
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

        <Link to="/service" className='service_btn'>
          <Button variant="contained" endIcon={<TbArrowNarrowRight />}>Details</Button>
        </Link>
      </div>
    </section>
  );
}
