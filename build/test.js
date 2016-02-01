import store from '../src/main.js';

/**
 * For now, just log the state on change.
 */
store.subscribe(() => {
    console.log(store.getState());
});

/**
 * Do something.
 */
store.dispatch({type: 'ADD_PRODUCT', id: 'a', quantity: 6});

// It shouldn't be possible to add more multiple lines with the same product id.
store.dispatch({type: 'ADD_PRODUCT', id: 'a', quantity: 6});

store.dispatch({type: 'ADD_PRODUCT', id: 'b', quantity: 12});
