import React, { useEffect } from 'react';
import useCart from '../../Store/CartStore';
import CartItem from './CartItem/CartItem';
import { TbTruckDelivery } from "react-icons/tb";
import { FaEraser } from "react-icons/fa6";
import Button from '@mui/material/Button';

export default function Cart() {
    const { cart, clearCart } = useCart();

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.count), 0);
    };

    const shippingCost = 21.99;

    const handleClearCart = () => {
        clearCart();
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="cart">
            <div className="container">
                <div className="cart_title_empty">
                    <h2 className='cart_title'><span>C</span>art</h2>
                    <div className='cart_empty'>
                        <Button variant="contained" onClick={handleClearCart}>
                            Empty Cart <FaEraser />
                        </Button>
                    </div>
                </div>
                <div className="cart_left_right">
                    {cart.length === 0 ? (
                        <p className='cart_your_empty'>Your cart is empty.</p>
                    ) : (
                        <ul className='cart_wrapper'>
                            {cart.map(item => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </ul>
                    )}
                    <div className="cart_right">
                        <h3 className='cart_right_title'>Order everything in the cart.</h3>
                        <div className="cart_rgiht_hr"></div>
                        <div className="cart_right_subtotal">
                            <h5 className='cart_right_subtotal_title'>Subtotal</h5>
                            <p className='cart_right_subtotal_price'>$ {getTotalPrice().toFixed(2)}</p>
                        </div>
                        <div className="cart_right_subtotal">
                            <h5 className='cart_right_subtotal_title'>Shipping</h5>
                            <p className='cart_right_subtotal_price'>$ {shippingCost.toFixed(2)}</p>
                        </div>
                        <div className="cart_right_subtotal">
                            <h5 className='cart_right_subtotal_title'>Total</h5>
                            <p className='cart_right_subtotal_price'>$ {(getTotalPrice() + shippingCost).toFixed(2)}</p>
                        </div>
                        <div className="cart_rgiht_hr"></div>
                        <div className='cart_order'>
                            <Button variant="contained">Order <TbTruckDelivery /></Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
