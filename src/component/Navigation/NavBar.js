import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import Logout from '../Logout/Logout';

const NavBar = ({ user }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand" to={'/'}>
                        ShopLane
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {user && (
                            <>
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to={'/'}>
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/clothing'}>
                                            Clothing
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/accessories'}>
                                            Accessories
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="navbar-nav icons">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/search">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/cart'}>
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link
                                            className="nav-link dropdown-toggle"
                                            to={'/profile'}
                                            id="navbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <FontAwesomeIcon icon={faUser} />
                                        </Link>
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                            <li>
                                                <Logout />
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
