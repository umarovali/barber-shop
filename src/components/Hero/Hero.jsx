import React from 'react';
export default function Hero({ foto, title, suptitle }) {
    return (
        <section className='hero'>
            <img className="hero_foto" src={foto} alt="" />
            <div className="container">
                <div className="hero_content">
                    <h1 className="hero_title">{title}</h1>
                    <p className='hero_suptitle'>{suptitle}</p>
                </div>
            </div>
        </section>
    )
}
