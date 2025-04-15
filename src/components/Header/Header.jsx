import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from "../../assets/images/Logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCart from "../../Store/CartStore";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerRef = useRef(null);
    const { cart } = useCart();
    const cartItemCount = cart.length;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: headerRef.current,
            start: 'top top',
            onEnter: () => {
                headerRef.current.classList.add('header_fixed');
            },
            onLeaveBack: () => {
                headerRef.current.classList.remove('header_fixed');
            },
        });
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header ref={headerRef} className="header">
            <div className="container">
                <div className="header_wrapper">
                    <Link to="/" className="header_logo">
                        <img src={Logo} alt="Logo" />
                    </Link>

                    <nav className={`header_nav ${isMenuOpen ? 'open' : ''}`}>
                        <ul className='header_list'>
                            <li className="header_text">
                                <NavLink to="/" >Home</NavLink>
                            </li>
                            <li className="header_text">
                                <NavLink to="/about-us" >About Us</NavLink>
                            </li>
                            <li className="header_text">
                                <NavLink to="/product" >Product</NavLink>
                            </li>
                            <li className="header_text">
                                <NavLink to="/hairstyle" >Hairstyle</NavLink>
                            </li>
                            <li className="header_text">
                                <NavLink to="/service" >Service</NavLink>
                            </li>
                            <li className="header_text">
                                <NavLink to="/masters" >Masters</NavLink>
                            </li>
                            {/* <li className="header_text">
                                <NavLink to="/contact-us" >Contact Us</NavLink>
                            </li> */}
                        </ul>

                        <div className="header_cart_menu">
                            <Link to="/cart" className='header_cart'>
                                <AiOutlineShoppingCart />
                                <p>Cart ({cartItemCount})</p>
                            </Link>

                            <button className={`header_menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                                <div className='line'></div>
                                <div className='line'></div>
                                <div className='line'></div>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
