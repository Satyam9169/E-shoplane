import React from 'react';
import useFetchProducts from '../../Utils/useFetchProducts';
import Loading from '../Loading/Loading';
import { URL } from '../../Utils/constant';
import './Home.css';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Home = () => {
    const { products, loading, error } = useFetchProducts(URL);

    const { addToCart } = useCart();

    if (loading) return <Loading />;
    if (error) return <div className='error'>{error}</div>;

    const groupedProducts = products.reduce((acc, product) => {
        const { category } = product;
        if (!acc[category]) acc[category] = [];
        acc[category].push(product);
        return acc;
    }, {});

    return (
        <div className='main-home'>
            <div className='home-container'>
                {Object.keys(groupedProducts).map((category) => (
                    <div key={category} className='home-category-section'>
                        <h2 className='home-category-title'>{category}</h2>
                        <div className='row'>
                            {groupedProducts[category].map((item) => {
                                const { id, title, price, category, image } = item;
                                return (
                                    <div className='col-md-4 mb-4' key={id}>
                                        <div className='home-card'>
                                            <Link to={`/viewproduct/${id}`} className='home-link'>
                                                <img src={image} className='home-card-img' alt={title} />
                                                <div className='home-card-body'>
                                                    <h3 className='home-card-title'>{title}</h3>
                                                    <p className='home-card-category'>{category}</p>
                                                    <p className='home-card-price'>₹{price}</p>
                                                    <button
                                                        className='home-add-to-cart-btn'
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            addToCart(item);
                                                        }}
                                                    >
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
