import React from 'react';
import { render } from 'react-dom';
import store from '../src/main.js';
import Cart from '../src/components/cart.js';

const update = () => {
    render(
        <Cart
            lines={store.getState().lines}
            quantityById={store.getState().quantityById}
            detailsById={store.getState().detailsById}
        />,
        document.getElementById('cart')
    );
}

store.subscribe(update);
update();

const addProduct = (id, price, quantity, details = {}) => {
    return {
        type: 'ADD_PRODUCT',
        id: id,
        price: price,
        quantity: quantity,
        details: details
    }
};

const removeProduct = (id) => {
    return {
        type: 'REMOVE_PRODUCT',
        id: id
    }
};

const changeQuantity = (id, quantity, isDelta = true) => {
    return {
        type: 'CHANGE_QUANTITY',
        id: id,
        quantity: quantity,
        isDelta: isDelta
    }
};

const setQuantity = (id, quantity) => {
    return changeQuantity(id, quantity, false);
};

/**
 * Do something.
 */
store.dispatch(addProduct('a', 4.99, 6, {title: 'Thing that was on a shelf'}));

// If we add another product with the same id, the quantity is increased.
store.dispatch(addProduct('a', 4.99, 1, {title: 'Shiny surfaced thing'}));

store.dispatch(addProduct('b', 999, 12, {title: 'Desirable artifact'}));
