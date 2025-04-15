import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { TbArrowNarrowRight } from 'react-icons/tb';
import HairstyleCard from '../../../components/HairstyleCard/HairstyleCard';
import { FaceApiHairstyle } from '../../../FaceApi/FaceApiHairstyle';
import { Link } from 'react-router-dom';

export default function HomeHairstyle({ searchHairstyle, сategoryHairstyle }) {
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
        <section className="home_hairstyle">
            <div className="container">
                <div className="hairstyle_left_right">
                    <div className="hairstyle_left">
                        <h2 className='hairstyle_title'><span>H</span>airstyle</h2>
                        <p className='hairstyle_suptitle'>A thoughtful hairstyle and decoration make a man’s image stylish and memorable.</p>
                    </div>

                    <Link to="/hairstyle" className="hairstyle_btn">
                        <Button variant="contained" endIcon={<TbArrowNarrowRight />}>
                            View all
                        </Button>
                    </Link>
                </div>

                <div data-aos="fade-up" data-aos-duration="1400" className="hairstyle_scroll">
                    <ul className="hairstyle_wrapper">
                        {searchFilteredProducts.map((item) => (
                            <HairstyleCard key={item.id} item={item} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
