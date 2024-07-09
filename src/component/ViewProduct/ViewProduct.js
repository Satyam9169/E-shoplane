import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useViewProduct from '../../Utils/useViewProduct';
import Loading from '../Loading/Loading';
import './ViewProduct.css'

const ViewProduct = () => {
    const { id } = useParams();
    const { product, loading, error } = useViewProduct(id);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <section className='container py-5'>
            <Link to={'/'} className='btn btn-outline-secondary mb-2'>Back to home</Link>
            <div class="card mb-3" style={{ maxWidth: "1040px" }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={product.image} class="img-fluid rounded-start" alt={product.title} />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h2 className='card-title text-secondary'>{product.title}</h2>
                            <p className='card-category'>Category: {product.category}</p>
                            <p className='card-description'>{product.description}</p>
                            <h1 className='card-price'>₹{product.price}</h1>
                            <p className='card-rating'>Rating: {product.rating?.rate} ({product.rating?.count} reviews)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ViewProduct;
