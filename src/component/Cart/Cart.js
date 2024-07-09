import React from 'react';
import { useCart } from '../context/CartContext'; 
import './Cart.css';

const Cart = () => {
    const { cart, removeFromCart } = useCart();

    if (cart.length === 0) {
        return <div className='container py-5'>Your cart is empty.</div>;
    }

    return (
        <section className='container py-5'>
            <h2>Your Cart</h2>
            <div className='row'>
                {cart.map((item) => (
                    <div className='col-md-4 mb-4' key={item.id}>
                        <div className='card h-100'>
                            <img src={item.image} className='card-img-top' alt={item.title} />
                            <div className='card-body d-flex flex-column'>
                                <h3 className='card-title'>{item.title}</h3>
                                <p className='card-text'>{item.category}</p>
                                <p className='card-text'>${item.price}</p>
                                <button
                                    className='btn btn-danger mt-auto'
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove from Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Cart;
