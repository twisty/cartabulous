import React from 'react';
import {render} from 'react-dom';
import store from '../src/main.js';
import Cart from '../src/components/cart.js';
import {addProduct} from '../src/actions.js';

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

/**
 * Do something.
 */
store.dispatch(addProduct('a', 4.99, 6, {title: 'Thing that was on a shelf'}));

// If we add another product with the same id, the quantity is increased.
store.dispatch(addProduct('a', 4.99, 1, {title: 'Shiny surfaced thing'}));

store.dispatch(addProduct('b', 999, 12, {title: 'Desirable artifact'}));
