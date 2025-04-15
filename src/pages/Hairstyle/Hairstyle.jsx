import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero';
import { SearchHairstyle } from '../../components/Search/Search';
import HairstyleAll from './HairstyleAll/HairstyleAll';

export default function Hairstyle() {
  const [сategoryHairstyle, setCategoryHairstyle] = useState('');
  const [searchHairstyle, setSearchHairstyle] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero foto={"https://www.openbusiness.ru/upload/presentations/barbershop12.jpg"} title={"Hairstyle"} suptitle={"A thoughtful hairstyle and decoration make a man’s image stylish and memorable."} />
      <SearchHairstyle searchHairstyle={searchHairstyle} setSearchHairstyle={setSearchHairstyle} setCategoryHairstyle={setCategoryHairstyle} />
      <HairstyleAll searchHairstyle={searchHairstyle} сategoryHairstyle={сategoryHairstyle} />
    </>
  )
}
