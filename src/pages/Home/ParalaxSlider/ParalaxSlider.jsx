import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import Button from '@mui/material/Button';
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineScissor } from "react-icons/ai";
import { GiDelicatePerfume } from "react-icons/gi";
// import img
import ParalaxFoto_1 from "../../../assets/images/ParalaxFoto/ParalaxFoto_1.jpg";
import ParalaxFoto_2 from "../../../assets/images/ParalaxFoto/ParalaxFoto_2.jpg";
import ParalaxFoto_3 from "../../../assets/images/ParalaxFoto/ParalaxFoto_3.jpg";
import ParalaxFoto_4 from "../../../assets/images/ParalaxFoto/ParalaxFoto_4.jpg";
import ParalaxFoto_5 from "../../../assets/images/ParalaxFoto/ParalaxFoto_5.jpg";
import ParalaxFoto_6 from "../../../assets/images/ParalaxFoto/ParalaxFoto_6.webp";
import ParalaxFoto_7 from "../../../assets/images/ParalaxFoto/ParalaxFoto_7.jpg";
import ParalaxFoto_8 from "../../../assets/images/ParalaxFoto/ParalaxFoto_8.jpg";
import ParalaxFoto_9 from "../../../assets/images/ParalaxFoto/ParalaxFoto_9.jpg";
import ParalaxFoto_10 from "../../../assets/images/ParalaxFoto/ParalaxFoto_10.jpg";
import ParalaxFoto_11 from "../../../assets/images/ParalaxFoto/ParalaxFoto_11.jpg";
import ParalaxFoto_12 from "../../../assets/images/ParalaxFoto/ParalaxFoto_12.jpg";
import ParalaxFoto_13 from "../../../assets/images/ParalaxFoto/ParalaxFoto_13.jpg";
import ParalaxFoto_14 from "../../../assets/images/ParalaxFoto/ParalaxFoto_14.jpg";
import ParalaxFoto_15 from "../../../assets/images/ParalaxFoto/ParalaxFoto_15.jpg";
import { Link } from 'react-router-dom';

export default function ParalaxSlider() {


    return (
        <section className='paralax_slider'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Parallax, Pagination]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>
                    <div className="paralax_wrapper">
                        <div className='slider_bg '>
                            <h1 className='paralax_title'>Book your haircut with ease!</h1>
                            <p className='paralax_suptitle'>
                                Welcome to our hair salon! Book a time that suits you online and enjoy professional hair care without waiting. Whether it's a stylish haircut, coloring or styling, our stylists are ready to make your wishes come true. Sign up now and experience the difference!
                            </p>
                            <div className="paralax_btn">
                                <Button variant="contained" endIcon={<BsPencilSquare />}>
                                    Book an
                                </Button>
                            </div>
                        </div>

                        <div className="paralax_foto">
                            <img className='parlax_img' src={ParalaxFoto_1} alt="" />
                            <img className='parlax_img' src={ParalaxFoto_2} alt="" />
                            <img className='parlax_img' src={ParalaxFoto_3} alt="" />
                            <img className='parlax_img' src={ParalaxFoto_4} alt="" />
                            <img className='parlax_img' src={ParalaxFoto_5} alt="" />

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="paralax_wrapper">
                        <div className='slider_bg'>
                            <h1 className='paralax_title'>Welcome to our hair salon!</h1>
                            <p className='paralax_suptitle'>
                                We offer a wide range of professional services for all hair types and preferences. Our experienced craftsmen use only high-quality materials and modern techniques to satisfy the most demanding requirements.
                            </p>
                            <Link to={"/service"} className="paralax_btn">
                                <Button variant="contained" endIcon={<AiOutlineScissor />}>
                                    View service
                                </Button>
                            </Link>
                        </div>

                        <div className="paralax_foto">
                            <img className='parlax_img' src={ParalaxFoto_6} alt="" />
                            <img className='parlax_img' src={ParalaxFoto_7} alt="" />
                            <img className='parlax_img' src={ParalaxFoto_8} alt="" />
                            <img className='parlax_img' src={ParalaxFoto_9} alt="" />
                            <img className='parlax_img' src={ParalaxFoto_10} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="paralax_wrapper">
                        <div className='slider_bg'>
                            <h1 className='paralax_title'>The best products for perfect hair!</h1>
                            <p className='paralax_suptitle'>
                                We offer a wide range of professional hair care, styling and coloring products. From shampoos and conditioners to tools and accessories, we've got everything you need to create the perfect hairstyle at home. Shop now and enjoy salon quality every day!
                            </p>
                            <Link to={"/product"} className="paralax_btn">
                                <Button variant="contained" endIcon={<GiDelicatePerfume />}>
                                    View products
                                </Button>
                            </Link>
                        </div>

                        <div className="paralax_foto">
                            <img className='parlax_img' src={ParalaxFoto_11} alt="" />
                            <img className='parlax_img' src={ParalaxFoto_12} alt="" />
                            <img className='parlax_img' src={ParalaxFoto_13} alt="" />
                            <img className='parlax_img' src={ParalaxFoto_14} alt="" />
                            <img className='parlax_img' src={ParalaxFoto_15} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
