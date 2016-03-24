import React, { Component } from 'react';
import { connect } from 'react-redux';
import Line from './line';
import * as cartActions from '../actions.js';

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
                    actions={cartActions}
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
}

const mapStateToProps = (state) => {
    return {
        lines: state.lines,
        quantityById: state.quantityById,
        detailsById: state.detailsById
    }
}

Cart = connect(mapStateToProps)(Cart);

export default Cart;
