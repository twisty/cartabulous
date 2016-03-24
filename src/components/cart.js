import React, { PropTypes } from 'react';
import Line from './line';

const Cart = (props) => {
    let lines = props.lines.map((id, key) => {
        return (
            <Line
                id={id}
                quantity={props.quantityById[id]}
                price={10}
                {...props.detailsById[id]}
                key={key}
            />
        );
    });
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
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
  detailsById: PropTypes.object.isRequired
}

export default Cart;
