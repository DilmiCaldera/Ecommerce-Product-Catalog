import React, {useEffect} from 'react';
import "../styles/Filters.scss";
import {useSelector, useDispatch} from 'react-redux';
import { getSidebarStatus, setSidebarOff } from '../store/sidebarSlice';
import { fetchAsyncCategories, getAllCategories } from '../store/categorySlice';
// import {getAllProducts} from "../store/productSlice";
import {Link} from "react-router-dom";

const Filters = () => {

    const dispatch = useDispatch();
    const isSidebarOn = useSelector(getSidebarStatus);
    const categories = useSelector(getAllCategories);
    // const allProducts = useSelector(getAllProducts);

    // const handleCategoryChange = (event) => {
    //     dispatch(setSidebarOff());
    //     const selectedCategory = event.target.value;
    //     if (selectedCategory) {
    //         window.location.href = `/category/${selectedCategory}`;
    //     }
    // };

    // const handlePriceRangeChange = (event) => {
    //     dispatch(setSidebarOff());
    //     const selectedPrice = event.target.value;
    //     if (selectedPrice) {
    //         window.location.href = `/path`;
    //     }
    // };

    // function createPriceRanges(prices, interval) {
    //     const maxPrice = Math.max(...prices);
    //     const priceRanges = [];
    //
    //     for (let i = 0; i <= maxPrice; i += interval) {
    //         const rangeStart = i;
    //         const rangeEnd = i + interval;
    //         priceRanges.push(`$${rangeStart.toFixed(2)} - $${rangeEnd.toFixed(2)}`);
    //     }
    //     return priceRanges;
    // }
    // let productPrices = allProducts.map(product => product.price);
    // const interval = 500;
    // const priceRanges = createPriceRanges(productPrices, interval);


    useEffect(() => {
        dispatch(fetchAsyncCategories())
    }, [dispatch])


    return (
        <aside className={`sidebar ${isSidebarOn ? 'hide-sidebar' : ""}`}>
            <button type="button" className='sidebar-hide-btn' onClick={() => dispatch(setSidebarOff())}>
                <i className='fas fa-times'></i>
            </button>
            <div className='sidebar-cnt'>
                <div className='cat-title fs-17 text-uppercase fw-6 ls-1h'>Product Categories</div>
                {/*<select className='cat-dropdown' onChange={handleCategoryChange} defaultValue="">*/}
                {/*    <option value="" disabled>Select a category</option>*/}
                {/*    {categories.map((category, idx) => (*/}
                {/*        <option key={idx} value={category['slug']} className='text-capitalize'>*/}
                {/*            {typeof category['slug'] === 'string' ? category['slug'].replace("-", " ") : ""}*/}
                {/*        </option>*/}
                {/*    ))}*/}
                {/*</select>*/}
                <ul className='cat-list'>
                    {
                        categories.map((category, idx) => {
                            return (
                                <li key={idx} onClick={() => dispatch(setSidebarOff())}>
                                    <Link to={`category/${category['slug']}`} className='cat-list-link text-capitalize'>
                                        {typeof category['slug'] === 'string' ? category['slug'].replace("-", " ") : ""}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                {/*<div className='cat-title fs-17 text-uppercase fw-6 ls-1h'>Price Ranges</div>*/}
                {/*<select className='cat-dropdown' onChange={handlePriceRangeChange} defaultValue="">*/}
                {/*    <option value="" disabled>Select a price range</option>*/}
                {/*    {priceRanges.map((price, idx) => (*/}
                {/*        <option key={idx} value={price}>*/}
                {/*            {price}*/}
                {/*        </option>*/}
                {/*    ))}*/}
                {/*</select>*/}
            </div>
        </aside>
    )
}

export default Filters
