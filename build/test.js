import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { default as cartReducer } from '../src/reducers/cart';
import Cart from '../src/containers/cart.js';
import Products from '../src/containers/products.js';

/**
 * Some products...
 */
let products = [
    { id: 'a', price: 499, title: 'Shiny Thing'},
    { id: 'b', price: 9999, title: 'Desirable Artifact'},
    { id: 'c', price: 1000, title: 'Widget'}
];

/**
 * Create a redux store with localstorage. This is taken from:
 * - http://stackoverflow.com/a/33728204
 */
const localStorageMiddleware = ({ getState }) => {
    return (next) => (action) => {
        const result = next(action);
        localStorage.setItem('applicationState', JSON.stringify(getState()));
        return result;
    }
}

const applicationStateJson = localStorage.getItem('applicationState') || '{}';

const store = createStore(
    cartReducer,
    JSON.parse(applicationStateJson),
    applyMiddleware(localStorageMiddleware)
);

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
