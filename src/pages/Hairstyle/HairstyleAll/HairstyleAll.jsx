import React, { useEffect, useState } from 'react';
import HairstyleCard from '../../../components/HairstyleCard/HairstyleCard';
import { FaceApiHairstyle } from '../../../FaceApi/FaceApiHairstyle';

export default function HairstyleAll({ searchHairstyle, сategoryHairstyle }) {

    const [shuffledHairstyle, setShuffledHairstyle] = useState([]);
    const [debouncedSearchHairstyle, setDebouncedSearchHairstyle] = useState("");

    useEffect(() => {
        setShuffledHairstyle(shuffleArray(FaceApiHairstyle));
    }, []);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchHairstyle(searchHairstyle);
        }, 600);

        return () => {
            clearTimeout(handler);
        };
    }, [searchHairstyle])

    const shuffleArray = array => {
        const newArray = array.slice();
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    const filteredHairstyle = сategoryHairstyle
        ? shuffledHairstyle.filter(hairstyle => hairstyle.category === сategoryHairstyle)
        : shuffledHairstyle;

    const searchFilteredProducts = filteredHairstyle.filter(hairstyle =>
        hairstyle.title.toLowerCase().includes(debouncedSearchHairstyle.toLowerCase())
    );

    return (
        <section className="hairstyle_all">
            <div className="container">
                <ul className="hairstyle_wrapper" data-aos="fade-up" data-aos-duration="1400">
                    {searchFilteredProducts.map((item) => (
                        <HairstyleCard key={item.id} item={item} />
                    ))}
                </ul>
            </div>
        </section>
    )
}
