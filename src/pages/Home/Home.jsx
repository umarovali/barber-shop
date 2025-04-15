import React, { useEffect, useState } from 'react'
import ParalaxSlider from './ParalaxSlider/ParalaxSlider'
import HomeAbout from './HomeAbout/HomeAbout'
import { SearchProduct, SearchHairstyle } from "../../components/Search/Search"
import HomeProduct from './HomeProduct/HomeProduct'
import HomeHairstyle from './HomeHairstyle/HomeHairstyle'
import HomeServices from './HomeServices/HomeServices'
import HomeMasters from './HomeMasters/HomeMasters';
import HomeBookAn from "./HomeBookAn/HomeBookAn"
import HomeReview from './HomeReview/HomeReview'
import HomeContactUS from './HomeContactUs/HomeContactUS'

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState("");
    const [сategoryHairstyle, setCategoryHairstyle] = useState('');
    const [searchHairstyle, setSearchHairstyle] = useState("");
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <ParalaxSlider />
            <HomeAbout />
            <SearchProduct searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSelectedCategory={setSelectedCategory} />
            <HomeProduct searchTerm={searchTerm} selectedCategory={selectedCategory} />
            <SearchHairstyle searchHairstyle={searchHairstyle} setSearchHairstyle={setSearchHairstyle} setCategoryHairstyle={setCategoryHairstyle} />
            <HomeHairstyle searchHairstyle={searchHairstyle} сategoryHairstyle={сategoryHairstyle} />
            <HomeServices />
            <HomeMasters />
            <HomeBookAn />
            <HomeReview />
            <HomeContactUS />
        </>
    )
}
