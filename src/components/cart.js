import React, { PropTypes } from 'react';
import Line from './line';

const Cart = (props) => {
    let lines = props.lines.map((id, key) => {
        return (
            <Line
                key={key}
                id={id}
                quantity={props.quantityById[id]}
                {...props.detailsById[id]}
                onChangeQuantity={props.onChangeQuantity}
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
                {lines}
            </tbody>
        </table>
    );
}

Cart.propTypes = {
  lines: PropTypes.array.isRequired,
  quantityById: PropTypes.object.isRequired,
  detailsById: PropTypes.object.isRequired,
  onChangeQuantity: PropTypes.func.isRequired
}

export default Cart;
