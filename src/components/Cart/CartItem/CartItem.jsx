import React from 'react';
import { BsCartDash } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import Button from '@mui/material/Button';
import { FaMinus, FaPlus } from "react-icons/fa";
import useCart from '../../../Store/CartStore';

export default function CartItem({ item }) {
    const { removeFromCart, updateItemCount } = useCart();

    const handleRemove = () => {
        removeFromCart(item.id);
    };

    const handleIncrement = () => {
        updateItemCount(item.id, item.count + 1);
    };

    const handleDecrement = () => {
        if (item.count > 1) {
            updateItemCount(item.id, item.count - 1);
        } else {
            removeFromCart(item.id);
        }
    };

    return (
        <li className='cart_item'>
            <div className='item_foto'>
                <img src={item.img} alt={item.title} />
            </div>
            <div className="item_content">
                <h3 className='item_title'>{item.title}</h3>
                <p className="item_suptitle">{item.suptitle}</p>
                <p className='item_price'>$ {(item.price * item.count).toFixed(2)}</p>
                <p className="item_brand">Brand: <span>{item.brand}</span></p>
                <p className="item_brand">Category: <span>{item.category}</span></p>
            </div>

            <div className="item_count">
                <button className='item_count_btn' onClick={handleDecrement}><FaMinus /></button>
                <span>{item.count}</span>
                <button className='item_count_btn' onClick={handleIncrement}><FaPlus /></button>
            </div>

            <div className="item_delete_order">
                <BsCartDash className='item_delete' onClick={handleRemove} />
                <div className='item_order'>
                    <Button variant="contained" endIcon={<TbTruckDelivery />}>Order</Button>
                </div>
            </div>
        </li>
    );
}
