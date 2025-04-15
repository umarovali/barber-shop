import React from 'react';
import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { TbMessageDots } from "react-icons/tb";
import { TbCircleLetterC } from "react-icons/tb";
import BackToTopButton from '../BackToTopButton/BackToTopButton';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <ul className="footer_wrapper">
                    <li>
                        <h6 className='footer_title'>Logo</h6>
                        <img className='footer_logo' src={Logo} alt="Logo" />
                    </li>
                    <li>
                        <h6 className="footer_title">Pages</h6>
                        <ul className='footer_links'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/product">Product</Link></li>
                            <li><Link to="/hairstyle">Hairstyle</Link></li>
                            <li><Link to="/service">Service</Link></li>
                            <li><Link to="/masters">Masters</Link></li>
                        </ul>
                    </li>w

                    <li>
                        <h6 className='footer_title'>Contact</h6>
                        <p className='footer_contact'><IoLocation /> Toktobay Atabaeva 19</p>
                        <p className='footer_contact'><FaPhone /> +996 551-93-70-40</p>
                        <p className='footer_contact'><TbMessageDots /> BarberShop.11@gmail.com</p>
                    </li>
                </ul>
            </div>

            <hr className='footer_hr' />

            <div className="container">
                <a href='https://umarov-ali.netlify.app' className='footer_author'><TbCircleLetterC /> <span>Author:</span>  Umarov Ali</a>
            </div>

            <BackToTopButton />
        </footer>
    )
}
