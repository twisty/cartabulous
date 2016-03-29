//
// Shopping Cart Example webapp
// ----------------------------

// Specity browser environment for eslint because we're using `window.localstorage`.
/*eslint-env browser */

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { default as cartReducer } from '../src/reducers/cart';
import Cart from '../src/containers/cart.js';
import Products from '../src/containers/products.js';

// Define some products
// --------------------
//
// For now we're just stubbing out some stupid products.
let products = [
    { id: 'a', price: 499, title: 'Shiny Thing'},
    { id: 'b', price: 9999, title: 'Desirable Artifact'},
    { id: 'c', price: 1000, title: 'Widget'}
];

// Create a Redux store
// --------------------
//
// Create a Redux store backed by localstorage.
//
// This is taken from: http://stackoverflow.com/a/33728204
const localStorageMiddleware = ({ getState }) => {
    return (next) => (action) => {
        const result = next(action);
        localStorage.setItem('applicationState', JSON.stringify(getState()));
        return result;
    }
}

// Read the initial application state from localstorage.
const applicationStateJson = localStorage.getItem('applicationState') || '{}';
const applicationState = JSON.parse(applicationStateJson);

// Create a the Redux store.
const store = createStore(
    cartReducer,
    applicationState,
    applyMiddleware(localStorageMiddleware)
);

// Render
// ------
//
// Render our app with a Redux provider.
render(
    <Provider store={store}>
        <div>
            <h2>Products</h2>
            <Products products={products} />
            <h2>Shopping Cart</h2>
            <Cart />
        </div>
    </Provider> ,
    document.getElementById('cart')
);
