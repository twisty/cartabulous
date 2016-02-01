import store from '../src/main.js';

/**
 * For now, just log on change.
 */
store.subscribe(() => {
    console.log(store.getState());
});

/**
 * Do something.
 */
store.dispatch({type: 'ADD_PRODUCT', id: 'a', quantity: 6});
