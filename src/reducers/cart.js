// Cart items reducer
// ------------------
//
// Cart items keeps track of the ids of items in a cart.
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
            index = state.indexOf(action.id);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];
        default:
            return state;
    }
}

// Quantities reducer
// ------------------
//
// Keeps track of the quantities of the items in the cart.
const quantityById = (state = {}, action) => {
    let quantity;
    let newState;
    let item;
    switch (action.type) {

        // ADD_ITEM
        //
        // Add `action.quantity` number of items with id `action.id`.
        //
        // If an item already exists with this id, change the quantity by `action.quantity`.
        case 'ADD_ITEM':
            quantity = (state[action.id] ? state[action.id] : 0) + action.quantity;
            item = {
                [action.id]: quantity
            };
            return {...state, ...item};

        // CHANGE_QUANTITY
        //
        // Change the number of items with id `action.id` by `action.quantityDelta`.
        case 'CHANGE_QUANTITY':
            quantity = (state[action.id] ? state[action.id] : 0) + action.quantityDelta;
            item = {
                [action.id]: quantity
            };
            return {...state, ...item};
        case 'SET_QUANTITY':
            quantity = action.quantity;
            item = {
                [action.id]: quantity
            };
            return {...state, ...item};
        case 'REMOVE_ITEM':
            newState = {...state};
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
}

// Details reducer
// ---------------
//
// `detailsById` keeps track of the details of items *as added* to the cart.
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

// Cart reducer
// ------------
const cart = (state = {}, action) => {
    return {
        items: items(state.items, action),
        quantityById: quantityById(state.quantityById, action),
        detailsById: detailsById(state.detailsById, action)
    };
}

export default cart;
