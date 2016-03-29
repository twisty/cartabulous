/**
 * Cart items reducer
 */
const items = (state = [], action) => {
    let index;
    switch (action.type) {
        case 'ADD_ITEM':
            // Prevent adding the same id more than once.
            if (state.indexOf(action.id) !== -1) {
                return state;
            }
            return [...state, action.id];
        case 'REMOVE_ITEM':
            // Prevent adding the same id more than once.
            index = state.indexOf(action.id);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];
        default:
            return state;
    }
}

/**
 * Quantities reducer
 */
const quantityById = (state = {}, action) => {
    let quantity;
    let newState;
    let item;
    switch (action.type) {
        case 'ADD_ITEM':
            // If a product already exists with this id, increase the quantity.
            quantity = (state[action.id] ? state[action.id] : 0) + action.quantity;
            item = {
                [action.id]: quantity
            };
            return {...state, ...item};
        case 'REMOVE_ITEM':
            newState = {...state};
            delete newState[action.id];
            return newState;
        case 'CHANGE_QUANTITY':
            if (action.isDelta) {
                quantity = (state[action.id] ? state[action.id] : 0) + action.quantity;
            } else {
                quantity = action.quantity;
            }
            item = {
                [action.id]: quantity
            };
            return {...state, ...item};
        default:
            return state;
    }
}

const detailsById = (state = {}, action) => {
    let item;
    switch (action.type) {
        case 'ADD_ITEM':
            item = {
                [action.id]: action.details
            };
            return {...state, ...item};
        case 'REMOVE_ITEM':
            var newState = {...state};
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
}

/**
 * Cart reducer.
 */
const cart = (state = {}, action) => {
    return {
        items: items(state.items, action),
        quantityById: quantityById(state.quantityById, action),
        detailsById: detailsById(state.detailsById, action)
    };
}

export default cart;
