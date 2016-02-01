import { createStore } from 'redux';
import { default as cart } from './reducers/cart';

/**
 * Create a redux store.
 */
let store = createStore(cart);

export default store;
