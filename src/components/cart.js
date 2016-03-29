import React, { PropTypes } from 'react';
import CartItem from './cart-item';

const Cart = (props) => {
    if (props.items.length < 1) {
        return (
            <p className="alert alert-info"><span className="fa fa-info-circle" aria-hidden="true"></span> Your cart is empty.</p>
        )
    }
    let items = props.items.map((id, key) => {
        return (
            <CartItem
                key={key}
                id={id}
                quantity={props.quantityById[id]}
                {...props.detailsById[id]}
                onSetQuantity={props.onSetQuantity}
                onRemoveItem={props.onRemoveItem}
            />
        );
    });
    return (
        <div>
            {items}
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array.isRequired,
    quantityById: PropTypes.object.isRequired,
    detailsById: PropTypes.object.isRequired,
    onSetQuantity: PropTypes.func.isRequired,
    onRemoveItem: PropTypes.func.isRequired
}

export default Cart;
