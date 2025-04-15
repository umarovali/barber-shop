import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IoMdClose } from "react-icons/io";

export default function ModalHairstyle({ open, onClose, item }) {
    if (!item) return null;

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box className="modal_hairstyle_wrapper">
                <div className="modal_img">
                    <img src={item.img} alt={item.title} />
                </div>

                <div className="modal_data">
                    <h2 className='modal_title'>{item.title}</h2>
                    <p className='modal_suptitle'>{item.suptitle}</p>
                    <h3 className='modal_hisory_title'>History</h3>
                    <ul className='modal_history'>
                        <li className='modal_list'><span>Origin:</span> {item.origin}</li>
                        <li className='modal_list'><span>Evolution:</span> {item.evolution}</li>
                    </ul>
                    <p className='modal_category'>Category: <span>{item.category}</span></p>
                </div>
                <button className='modal_product_close' onClick={onClose}><IoMdClose /></button>
            </Box>
        </Modal>
    );
}
