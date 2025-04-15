import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IoIosClose } from "react-icons/io";
import useAddReview from '../../../../Store/ReviewStore';
import ReviewFoto from "../../../../assets/images/ReviewFoto/avatar_icon.jpg";

export default function HomeReviewModal() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [avatar, setAvatar] = useState(ReviewFoto);
    const [error, setError] = useState('');
    const { setReviewAdd } = useAddReview();

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setError('');
        clearFields();
    };

    const handleFileChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const clearFields = () => {
        setName('');
        setContent('');
        setAvatar(ReviewFoto);
    };

    const handleSubmit = () => {
        if (!name || !content) {
            setError('Заполните все поля');
        } else {
            const newReview = { name, content, avatar };
            setReviewAdd(newReview);
            clearFields();
            handleClose();
        }
    };

    return (
        <div>
            <button onClick={handleOpen} className="button">
                <span className="button__text">Add Item</span>
                <span className="button__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" height="24" fill="none" className="svg">
                        <line y2="19" y1="5" x2="12" x1="12"></line>
                        <line y2="12" y1="12" x2="19" x1="5"></line>
                    </svg>
                </span>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="home_review_modal_content">
                    <div className="modal_avatar_name">
                        <label htmlFor="avatar-upload">
                            <div className={`avatar ${avatar ? 'modal_avatar' : 'placeholder'}`}>
                                {avatar && (
                                    <img
                                        className='modal_avatar'
                                        src={avatar}
                                        alt="Avatar"
                                    />
                                )}
                            </div>
                        </label>
                        <input
                            id="avatar-upload"
                            type="file"
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                        <input
                            className='modal_name'
                            type="text"
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <textarea className='modal_content'
                        placeholder='Content'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button className='modal_add' onClick={handleSubmit}>add</button>

                    <button onClick={handleClose} className='modal_close'><IoIosClose /></button>
                </Box>
            </Modal>
        </div>
    );
}
