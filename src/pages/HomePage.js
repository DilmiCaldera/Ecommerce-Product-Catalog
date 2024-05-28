import React, {useEffect} from 'react';
import "../styles/HomePage.scss";
import { useSelector, useDispatch } from 'react-redux';
import ProductList from "../components/ProductList";
import { fetchAsyncProducts, getAllProducts, getAllProductsStatus } from '../store/productSlice';
import { STATUS } from '../services/status';
import Loader from "../components/Loader";

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncProducts(50));
    }, [dispatch]);

    const products = useSelector(getAllProducts);
    const productStatus = useSelector(getAllProductsStatus);

    // randomizing the products in the list
    const tempProducts = [];
    if(products.length > 0){
        for(let i in products){
            let randomIndex = Math.floor(Math.random() * products.length);

            while(tempProducts.includes(products[randomIndex])){
                randomIndex = Math.floor(Math.random() * products.length);
            }
            tempProducts[i] = products[randomIndex];
        }
    }

    return (
        <main>
            {/*main content*/}
            <div className='main-content bg-whitesmoke'>
                <div className='container'>
                    <div className='categories py-5'>
                        <div className='categories-item'>
                            <div className='title-md'>
                                <h3>See our products</h3>
                            </div>
                            {productStatus === STATUS.LOADING ? <Loader/> : <ProductList products={tempProducts}/>}
                        </div>
                    </div>
                </div>
            </div>

            {/*footer*/}
            <footer className='footer bg-orange'>
                <div className="container py-4 text-center">
                    <span className='text-white copyright-text text-manrope fs-14 fw-3'>&copy; 2024. All Rights Reserved.</span>
                </div>
            </footer>

        </main>
    )
}

export default HomePage