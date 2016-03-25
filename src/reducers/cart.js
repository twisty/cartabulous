/**
 * Cart lines reducer
 */
const lines = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            // Prevent adding the same id more than once.
            if (state.indexOf(action.id) !== -1) {
                return state;
            }
            return [...state, action.id];
        default:
            return state;
    }
}

/**
 * Quantities reducer
 */
const quantityById = (state = {}, action) => {
    let quantity;
    let item;
    switch (action.type) {
        case 'ADD_PRODUCT':
            // If a product already exists with this id, increase the quantity.
            quantity = (state[action.id] ? state[action.id] : 0) + action.quantity;
            item = {
                [action.id]: quantity
            };
            return Object.assign({}, state, item);
        case 'CHANGE_QUANTITY':
            if (action.isDelta) {
                quantity = (state[action.id] ? state[action.id] : 0) + action.quantity;
            } else {
                quantity = action.quantity;
            }
            item = {
                [action.id]: quantity
            };
            return Object.assign({}, state, item);
        default:
            return state;
    }
}

const detailsById = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            let item = {
                [action.id]: action.details
            };
            return Object.assign({}, state, item);
        default:
            return state;
    }
}

/**
 * Cart reducer.
 */
const cart = (state = {}, action) => {
    return {
        lines: lines(state.lines, action),
        quantityById: quantityById(state.quantityById, action),
        detailsById: detailsById(state.detailsById, action)
    };
}

export default cart;
