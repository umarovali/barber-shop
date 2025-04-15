import React from 'react';
import ServiceItem from './ServiceItem/ServiceItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function ServiceSwiper() {
    return (
        <section className='service_swiper'>
            <h3 className='service_title'><span>S</span>ervices</h3>
            <center><p className='service_suptitle'>Unique services, unsurpassed quality, unforgettable style - only in our Barber Shop.</p></center>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <ServiceItem category={"Main services"} />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceItem category={"Shaving services"} />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceItem category={"Additional services"} />
                </SwiperSlide>
            </Swiper>

        </section>
    )
}
