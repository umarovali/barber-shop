import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { FaceApiGallery } from '../../../../FaceApi/FaceApiGallery';
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";

export default function ModalGallery({ open, handleClose, selectedPhotoId }) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const initialIndex = FaceApiGallery.findIndex(photo => photo.id === selectedPhotoId);
        setSelectedIndex(initialIndex !== -1 ? initialIndex : 0);
    }, [selectedPhotoId]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                handlePrevSlide();
            } else if (event.key === 'ArrowRight') {
                handleNextSlide();
            }
        };

        if (open) {
            window.addEventListener('keydown', handleKeyDown);
        } else {
            window.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [open]);

    const handlePrevSlide = () => {
        setSelectedIndex(prevIndex => (prevIndex === 0 ? FaceApiGallery.length - 1 : prevIndex - 1));
    };

    const handleNextSlide = () => {
        setSelectedIndex(prevIndex => (prevIndex === FaceApiGallery.length - 1 ? 0 : prevIndex + 1));
    };

    const handleCloseModal = () => {
        handleClose();
        setSelectedIndex(0);
    };

    return (
        <Modal
            open={open}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className='modal_gallery_container'>
                <button className='modal_gallery_arrow left' onClick={handlePrevSlide}>
                    <RiArrowLeftWideFill />
                </button>
                {FaceApiGallery.length > 0 && (
                    <img
                        className='modal_gallery_foto'
                        src={FaceApiGallery[selectedIndex].foto}
                        alt=""
                    />
                )}
                <button className='modal_gallery_arrow right' onClick={handleNextSlide}>
                    <RiArrowRightWideFill />
                </button>
            </div>
        </Modal>
    );
}
