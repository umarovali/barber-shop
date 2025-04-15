import React, { useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import History from "./History/History"
import AboutHeroFoto from "../../assets/images/AboutUs/About_hero_foto.webp"
import WhyUs from './WhyUs/WhyUs';
import Galery from './Galery/Galery';

export default function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Hero foto={AboutHeroFoto} title={"About Us"} suptitle={"We are a trusted partner for hairdressers, offering solutions that help create stunning looks and satisfy the most demanding clients."} />
            <History />
            <WhyUs />
            <Galery />
        </>
    )
}
