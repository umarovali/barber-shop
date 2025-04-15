import React from 'react';
import Button from '@mui/material/Button';
import { TbArrowNarrowRight } from "react-icons/tb";
import { Link } from 'react-router-dom';

export default function HomeAbout() {
    return (
        <section className='home_about'>
            <div className="container">
                <div className="about_left_right">
                    <div className="about_left">
                        <h2 className='about_title'><span>A</span>bout Us</h2>

                        <p className='about_suptitle' >
                            "About Our Hair Salon: Depths of Beauty, Curly Mysteries, and Style Magic
                            We're not just a place where you come to get a haircut. We're a center where dreams of a new look are born and brought to life, where each hairstyle becomes the centerpiece of its own beauty story.
                        </p>
                        <p className='about_suptitle'>
                            Our hair salon is not just a space with chairs and mirrors. It's an atmosphere, an inspiration, a place where every strand matters, where every cut is a work of art.
                        </p>
                   
                        <Link to={"/about-us"}  className="about_btn">
                            <Button variant="contained" endIcon={<TbArrowNarrowRight />}>
                                Details
                            </Button>
                        </Link>
                    </div>

                    <div className="about_right">
                        <img src="https://cdn3.tutortop.ru/wp-content/uploads/2023/10/image-112.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
