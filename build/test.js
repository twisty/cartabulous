import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from '../src/main.js';
import Cart from '../src/containers/cart.js';

import * as cartActions from '../src/actions.js';
store.dispatch(cartActions.addProduct('a', 4.99, 6, {title: 'Thing that was on a shelf'}));

 // If we add another product with the same id, the quantity is increased.
store.dispatch(cartActions.addProduct('a', 4.99, 1, {title: 'Shiny surfaced thing'}));

store.dispatch(cartActions.addProduct('b', 999, 12, {title: 'Desirable artifact'}));

const update = () => {
    render(
        <div>
            <Provider store={store}>
                <Cart />
            </Provider>
        </div>,
        document.getElementById('cart')
    );
}

//store.subscribe(update);

update();


