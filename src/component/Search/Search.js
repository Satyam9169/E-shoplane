import React, { useState } from 'react';
import useFetchProducts from '../../Utils/useFetchProducts';
import Loading from '../Loading/Loading';
import { URL } from '../../Utils/constant';
import { useCart } from '../context/CartContext';
import './Search.css';

const Search = () => {
    const { products, loading, error } = useFetchProducts(URL);
    const { addToCart } = useCart();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );

    if (loading) return <Loading />;
    if (error) return <div className='search-error'>{error}</div>;

    return (
        <div className='search-container'>
            <input
                type='text'
                className='search-input'
                placeholder='Search for products...'
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className='search-results'>
                {filteredProducts.map(product => (
                    <div className='search-card' key={product.id}>
                        <img src={product.image} alt={product.title} className='search-card-img' />
                        <div className='search-card-body'>
                            <h3 className='search-card-title'>{product.title}</h3>
                            <p className='search-card-category'>{product.category}</p>
                            <p className='search-card-price'>₹{product.price}</p>
                            <button
                                className='search-add-to-cart-btn'
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
