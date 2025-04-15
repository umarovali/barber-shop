import React, { useEffect } from 'react'
import Hero from "../../components/Hero/Hero";
import ServiceSwiper from './ServiceSwiper/ServiceSwiper';

export default function Servicee() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero foto={"https://st3.depositphotos.com/3919539/16400/i/450/depositphotos_164002372-stock-photo-man-stylish-client-in-barbershop.jpg"} title={"Services"} suptitle={"Unique services, unsurpassed quality, unforgettable style - only in our Barber Shop."} />
      <ServiceSwiper />
    </>
  )
}
