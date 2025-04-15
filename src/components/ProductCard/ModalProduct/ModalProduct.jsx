import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IoMdClose } from "react-icons/io";
import { BsCartPlus, BsCartDash } from "react-icons/bs";

export default function ModalProduct({ open, onClose, item, isInCart, handleToggleCart }) {
    if (!item) return null;

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box className="modal_product_wrapper">
                <div className="modal_img">
                    <img src={item.img} alt={item.title} />
                </div>

                <div className="modal_data">
                    <h2 className='modal_title'>{item.title}</h2>
                    <p className='modal_suptitle'>{item.suptitle}</p>
                    <p className='modal_price'>$ {item.price}</p>
                    <p className='modal_data_text'>Brand: <span>{item.brand}</span></p>
                    <p className='modal_data_text'>Category: <span>{item.category}</span></p>
                </div>
                <button className='modal_product_close' onClick={onClose}><IoMdClose /></button>

                {isInCart ? (
                    <BsCartDash
                        className='product_cart_minus'
                        onClick={handleToggleCart}
                    />
                ) : (
                    <BsCartPlus
                        className='product_cart_plus'
                        onClick={handleToggleCart}
                    />
                )}
            </Box>
        </Modal>
    );
}
