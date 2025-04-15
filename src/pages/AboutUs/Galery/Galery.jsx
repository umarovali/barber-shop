import React, { useState } from 'react';
import { BiSearchAlt } from "react-icons/bi";
import { FaceApiGallery } from '../../../FaceApi/FaceApiGallery';
import ModalGallery from './ModalGallery/ModalGallery';

export default function Galery() {
    const [open, setOpen] = useState(false);
    const [selectedPhotoId, setSelectedPhotoId] = useState(null);

    const handleOpen = (id) => {
        setSelectedPhotoId(id);
        setOpen(true);
    };

    const handleClose = () => {
        setSelectedPhotoId(null);
        setOpen(false);
    };

    return (
        <section className='galery'>
            <div className="container">
                <h4 className='galery_title'><span>G</span>allery</h4>
                <center>
                    <p className='gallery_suptitle'>New images. Limitless possibilities. Style gallery.</p>
                </center>

                <ul className="gallery_wrapper">
                    {FaceApiGallery.map((item) => (
                        <li onClick={() => handleOpen(item.id)} key={item.id} className='gallery_foto'>
                            <img src={item.foto} alt="" />
                            <BiSearchAlt className="gallery_icon" />
                        </li>
                    ))}
                </ul>
            </div>

            <ModalGallery open={open} handleClose={handleClose} selectedPhotoId={selectedPhotoId} />
        </section>
    );
}
