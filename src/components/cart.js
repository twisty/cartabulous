import React, { Component } from 'react';
import Line from './line';

class Cart extends Component
{
    render() {
        let lines = this.props.lines.map((id, key) => {
            return (
                <Line
                    id={id}
                    quantity={this.props.quantityById[id]}
                    price={10}
                    {...this.props.detailsById[id]}
                    key={key}
                />
            );
        });
        return (
            <table>
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
}

export default Cart;
