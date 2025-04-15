import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero';
import ProductHeroFoto from "../../assets/images/ProductFoto/Prduct_hero_foto.jpeg";
import { SearchProduct } from '../../components/Search/Search';
import ProductAll from './ProductAll/ProductAll';

export default function Product() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero foto={ProductHeroFoto} title={"Product"} suptitle={"Create your style with ease and confidence! Unique products for the perfect look."} />
      <SearchProduct searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSelectedCategory={setSelectedCategory} />
      <ProductAll searchTerm={searchTerm} selectedCategory={selectedCategory} />
    </>
  )
}
