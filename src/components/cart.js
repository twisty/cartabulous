import React, { PropTypes } from 'react';
import CartItem from './cart-item';

const Cart = (props) => {
    let items = props.items.map((id, key) => {
        return (
            <CartItem
                key={key}
                id={id}
                quantity={props.quantityById[id]}
                {...props.detailsById[id]}
                onChangeQuantity={props.onChangeQuantity}
                onRemoveItem={props.onRemoveItem}
            />
        );
    });
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th className="text-right">Price</th>
                </tr>
            </thead>
            <tbody>
                {items}
            </tbody>
        </table>
    );
}

Cart.propTypes = {
    items: PropTypes.array.isRequired,
    quantityById: PropTypes.object.isRequired,
    detailsById: PropTypes.object.isRequired,
    onChangeQuantity: PropTypes.func.isRequired,
    onRemoveItem: PropTypes.func.isRequired
}

export default Cart;
