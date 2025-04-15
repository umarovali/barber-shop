import React, { useState } from 'react';
import ModalHairstyle from './ModalHairstyle/ModalHairstyle';

export default function HairstyleCard({ item }) {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleOpen = () => {
        setSelectedItem(item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedItem(null);
    };

    return (
        <>
            <li onClick={handleOpen} className="hairstyle_card">
                <img src={item.img} alt={item.title} />

                <div className="card_content">
                    <h3 className='card_title'>{item.title}</h3>
                    <p className='card_suptitle'>{item.suptitle}</p>
                    <p className='card_category'>Category: <span>{item.category}</span></p>
                </div>
            </li>

            {selectedItem && (
                <ModalHairstyle open={open} onClose={handleClose} item={selectedItem} />
            )}
        </>
    )
}
