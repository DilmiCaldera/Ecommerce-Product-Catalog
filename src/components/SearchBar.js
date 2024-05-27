import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux';
import { setSidebarOn } from "../store/sidebarSlice";
import { getAllCarts, getCartItemsCount, getCartTotal } from "../store/cartSlice";
import CartItem from "./CartItem";
import "../styles/SearchBar.scss";

const SearchBar = () => {
    const dispatch = useDispatch();
    const carts = useSelector(getAllCarts);
    const itemsCount = useSelector(getCartItemsCount);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchTerm = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }

    useEffect(() => {
        dispatch(getCartTotal());
    }, [carts])

    return (
        <nav className='navbar'>
            {/*header*/}
            <header className='header text-white'>
                <div className='container'>
                    <div className='header-cnt'>
                        <div className='header-cnt-top fs-13 py-2 flex align-center justify-between'>
                            <div className='header-cnt-top-r'>
                                <ul className='top-links flex align-center'>
                                    <li>
                                        <Link to="/">
                                            <span className='top-link-itm-txt'>Sign Up</span>
                                        </Link>
                                    </li>
                                    <li className='vert-line'></li>
                                    <li>
                                        <Link to="/">
                                            <span className='top-link-itm-txt'>Log in</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <br/>
            <div className='navbar-cnt flex align-center'>
                <div className='brand-and-toggler flex align-center'>
                    <button type="button" className='sidebar-show-btn'
                            onClick={() => dispatch(setSidebarOn())}>
                        <i className='fas fa-bars'></i>
                    </button>
                    <Link to="/" className='navbar-brand flex align-center'>
                        <span className='navbar-brand-ico'>
                          <i className='fa-solid fa-bag-shopping'></i>
                        </span>
                    </Link>
                </div>

                <div className='navbar-collapse w-100'>
                    <div className='navbar-search bg-white'>
                        <div className='flex align-center'>
                            <input type="text" className='form-control fs-14'
                                   placeholder='Search your preferred items here'
                                   onChange={(e) => handleSearchTerm(e)}/>
                            <Link to={`search/${searchTerm}`}
                                  className='text-white search-btn flex align-center justify-center'>
                                <i className='fa-solid fa-magnifying-glass'></i>
                            </Link>
                        </div>
                    </div>


                </div>

                <div className='navbar-cart flex align-center'>
                    <Link to="/cart" className='cart-btn'>
                        <i className='fa-solid fa-cart-shopping cart-count-btn'></i>
                        <div className='cart-items-value'>{itemsCount}</div>
                        <CartItem carts={carts}/>
                    </Link>
                </div>
            </div>
        </nav>


    )
}

export default SearchBar
