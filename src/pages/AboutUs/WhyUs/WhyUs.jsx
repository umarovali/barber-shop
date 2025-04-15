import React from 'react';
import { LiaUserClockSolid } from "react-icons/lia";
import { IoPricetagsOutline } from "react-icons/io5";
import { GiHairStrands } from "react-icons/gi";
import WhyUsList from './WhyUsList/WhyUsList';

export default function WhyUs() {
    return (
        <section className='why_us'>
            <hr className='why_us_hr' />
            <hr className='why_us_hr' />

            <div className="container">
                <h3 className="why_us_title"><span>W</span>hy us</h3>
                <center><p className='why_us_suptitle'>You can find out here and find the answer to the question why us.</p></center>

                <ul className="why_us_wrapper">
                    <WhyUsList Icon={LiaUserClockSolid} title={"Speed and Service"} suptitle={"In our company, you will receive fast and high-quality service. Our professionals will quickly and efficiently create the perfect look for you without compromising its quality."} />
                    <WhyUsList Icon={IoPricetagsOutline} title={"Low Prices"} suptitle={"We offer the lowest prices on the market while maintaining high-quality services. Our goal is to make beauty accessible to everyone, so we constantly work on cost optimization without sacrificing quality."} />
                    <WhyUsList Icon={GiHairStrands} title={"Top Master"} suptitle={"Our services are provided by the best masters in the industry. They possess the highest level of professionalism, experience, and creative potential, guaranteeing you the perfect result that meets your expectations."} />
                </ul>
            </div>

            <hr className='why_us_hr' />
            <hr className='why_us_hr' />
        </section>
    )
}
