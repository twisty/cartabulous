export const addProduct = (id, price, quantity, details = {}) => {
    return {
        type: 'ADD_PRODUCT',
        id: id,
        price: price,
        quantity: quantity,
        details: details
    }
};

export const removeProduct = (id) => {
    return {
        type: 'REMOVE_PRODUCT',
        id: id
    }
};

export const changeQuantity = (id, quantity, isDelta = true) => {
    return {
        type: 'CHANGE_QUANTITY',
        id: id,
        quantity: quantity,
        isDelta: isDelta
    }
};

export const setQuantity = (id, quantity) => {
    return changeQuantity(id, quantity, false);
};
