import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./store/store";
import SearchBar from "./components/SearchBar";
import "./App.scss";
import Filters from "./components/Filters";

import CategoryProduct from "../src/pages/CategoryProductPage";
import ProductSingle from "./pages/ProductPage";
import Home from "../src/pages/HomePage";
import Cart from "../src/pages/CartPage";
import Search from "../src/pages/SearchPage";


function App() {
    return (
        <div className="App">
            <Provider store = {store}>
                <BrowserRouter>
                    <SearchBar />
                    <Filters />

                    <Routes>
                        {/* home page route */}
                        <Route path = "/" element = {<Home />} />
                        {/* single product route */}
                        <Route path = "/product/:id" element = {<ProductSingle />} />
                        {/* category wise product listing route */}
                        <Route path = "/category/:category" element = {<CategoryProduct />} />
                        {/* cart */}
                        <Route path = "/cart" element = {<Cart />} />
                        {/* searched products */}
                        <Route path = "/search/:searchTerm" element = {<Search />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;