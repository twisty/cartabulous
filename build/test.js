import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from '../src/main.js';
import Cart from '../src/containers/cart.js';
import Products from '../src/containers/products.js';

let products = [
    { id: 'a', price: 499, title: 'Shiny Thing'},
    { id: 'b', price: 9999, title: 'Desirable Artifact'}
];

render(
    <Provider store={store}>
        <div className="container">
            <h2>Products</h2>
            <Products products={products} />
            <h2>Shopping Cart</h2>
            <Cart />
        </div>
    </Provider> ,
    document.getElementById('cart')
);
