export const addItem = (id, price, quantity, details = {}) => {
    return {
        type: 'ADD_ITEM',
        id: id,
        price: price,
        quantity: quantity,
        details: details
    }
};

export const removeItem = (id) => {
    return {
        type: 'REMOVE_ITEM',
        id: id
    }
};

// Change the quantity of an item by delta.
//
// Use this action to increment / deincrement the quantity.
export const changeQuantity = (id, quantityDelta) => {
    return {
        type: 'CHANGE_QUANTITY',
        id: id,
        quantityDelta: quantityDelta
    }
};

// Set the quantity for an item.
export const setQuantity = (id, quantity) => {
    // XXX don't know it this check should be here, or logic in the reducer?
    if (quantity === 0) {
        return removeItem(id);
    }
    return {
        type: 'SET_QUANTITY',
        id: id,
        quantity: quantity
    }
};
