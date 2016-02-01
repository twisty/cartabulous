/**
 * Define an initial state.
 */
const initialState = {
  lineIds: [],
  quantityById: {}
}

/**
 * Just a stub reducer.
 */
export default function cart(state = initialState, action) {
    if (action.type === 'ADD_PRODUCT') {
        let newState = Object.assign({}, state);
        // Prevent adding the same id more than once.
        if (newState.lineIds.indexOf(action.id) !== -1) {
            // A "do nothing" strategy.
            return state;
        }
        newState.lineIds.push(action.id);
        newState.quantityById[action.id] = action.quantity;
        return newState;
    } else {
        return state;
    }
}
