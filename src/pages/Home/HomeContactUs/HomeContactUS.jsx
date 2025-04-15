import React from 'react';
import { RiTiktokLine } from "react-icons/ri";
import { FiYoutube } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { LuTwitter } from "react-icons/lu";
import Button from '@mui/material/Button';
import { TbArrowNarrowRight } from "react-icons/tb";

export default function HomeContactUS() {
    return (
        <section className='home_contact_us'>
            <div className="container">
                <h5 className='contact_us_title'><span>C</span>ontact Us</h5>
                <center>
                    <p className="contact_us_suptitle">Come to our office. Here is our location on the map. Subscribe to our social networks to stay up to date with news!</p>
                </center>

                <div className="contact_us_wrapper">
                    <iframe 
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A49945a95379b322cb5e20eeeedcaac7c7522d9ca211201ba9e45c490694ff5f1&amp;source=constructor" 
                        width="500" 
                        height="350" 
                        frameBorder="0"
                        allowFullScreen={true}
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>

                    <div className="contact_us_content">
                        <p className='contact_us_text'>The hairdresser's working hours are from 10:00 to 20:00 daily.</p>

                        <p className='contact_us_icon_suptitle'>If you want to know more about us, check out our social networks!</p>
                        <ul className='contact_us_icon'>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><LuTwitter className='icon' /></a></li>
                            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FiYoutube className='icon' /></a></li>
                            <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><RiTiktokLine className='icon' /></a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><IoLogoInstagram className='icon' /></a></li>
                        </ul>

                        {/* <div className='contact_us_btn'>
                            <Button variant="contained" endIcon={<TbArrowNarrowRight />}>Details</Button>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
