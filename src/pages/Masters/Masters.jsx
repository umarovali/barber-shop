import React, { useEffect } from 'react';
import MastersAll from './MastersAll/MastersAll';
import foro from "../../assets/images/Masters/MastersHeroFoto.jpg";
import Hero from "../../components/Hero/Hero";

export default function Masters() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero foto={foro} title={"Masters"} suptitle={"Our masters are the best! They bring your dreams to life with precision and attention to detail. Trust us!"} />
      <MastersAll />
    </>
  )
}
