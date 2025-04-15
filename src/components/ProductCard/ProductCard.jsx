import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import ModalProduct from './ModalProduct/ModalProduct';
import { BsCartPlus, BsCartDash } from "react-icons/bs";
import useCart from '../../Store/CartStore';

export default function ProductCard({ item }) {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const { cart, addToCart, removeFromCart } = useCart();

    const handleOpen = () => {
        setSelectedItem(item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedItem(null);
    };

    const handleToggleCart = (e) => {
        e.stopPropagation();
        const isInCart = cart.some(cartItem => cartItem.id === item.id);
        if (isInCart) {
            removeFromCart(item.id);
        } else {
            addToCart(item);
        }
    };

    const isInCart = cart.some(cartItem => cartItem.id === item.id);

    return (
        <>
            <Card onClick={handleOpen} className='product_card'>
                <CardActionArea>
                    <div data-aos="fade-down" data-aos-duration="1800" className="card_img">
                        <img src={item.img} alt={item.title} />
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
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" className="card_data">
                        <h3 className='card_title'>{item.title}</h3>
                        <p className="card_suptitle">{item.suptitle}</p>
                        <div className="card_brend_price">
                            <p className="card_brend">
                                {item.brand}
                            </p>
                            <span className='card_price'>$ {item.price}</span>
                        </div>
                    </div>
                </CardActionArea>
            </Card>
            {selectedItem && (
                <ModalProduct isInCart={isInCart} handleToggleCart={handleToggleCart} open={open} onClose={handleClose} item={selectedItem} />
            )}
        </>
    );
}
