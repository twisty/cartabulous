// The CartItem Component
// ======================
//
// The `CartItem` component is responsible for rendering a line in the cart.
//
// A `CartItem` displays the title and a short description of the item, a method for
// changing the quantity, and details of the price of the goods in this line.

import React, { Component, PropTypes } from 'react';
import QuantityText from './quantity-text';

class CartItem extends Component {

    // Constructor
    // -----------
    //
    // Here we set up the initial component state.
    //
    // `freshTyping` keeps track of whether the quantity control has recently
    // been switched from a select menu to a type-in quantity control.
    constructor(props) {
        super(props);
        this.state = {
            freshTyping: false
        };
    }

    // @todo This shouldn't really be here.
    formatMoney(amount) {
        return '£' + (amount / 100).toFixed(2);
    }

    onChangeQuantityViaSelect = (newQuantity) => {
        if (newQuantity < 10) {
            this.props.onChangeQuantity(this.props.id, newQuantity, false);
        } else {
            this.setState({
                freshTyping: true
            });
        }
    };

    onChangeQuantityViaTyping= (newQuantity) => {
        this.props.onChangeQuantity(this.props.id, newQuantity, false);
        this.setState({
            freshTyping: false
        });
    };

    renderSelect() {
        const { quantity } = this.props;
        let quantityOptions = []
        for (let i = 1; i < 10; i++) {
            quantityOptions.push(
                <option key={i} value={i}>{i}</option>
            );
        }
        return (
            <select value={quantity} className="form-control" onChange={(e) => {
                this.onChangeQuantityViaSelect(Number(e.target.value));
            }}>
                {quantityOptions}
                <option value={10}>10+</option>
            </select>
        );
    }

    render() {
        const {id, title, price, quantity} = this.props;
        let quantitySelect;
        if ((quantity < 10) && (this.state.freshTyping === false)) {
            quantitySelect = this.renderSelect();
        } else {
            quantitySelect = (
                <QuantityText
                    active={this.state.freshTyping}
                    value={quantity}
                    onChange={this.onChangeQuantityViaTyping}
                />
            );
        }
        const handleRemoveClick = () => {
            this.props.onRemoveItem(id);
        }
        return (
            <tr>
                <td>
                    <p><strong>{title || '@todo no title: ' + id}</strong></p>
                    <p>Short description goes here.</p>
                    <p><button className="btn btn-danger btn-xs" onClick={handleRemoveClick}>Remove</button></p>
                </td>
                <td className="col-xs-2">{quantitySelect}</td>
                <td className="col-xs-2 text-right">
                    {this.formatMoney(price * quantity)}
                    {(quantity > 1) ? (<p className="text-muted">({this.formatMoney(price)} each)</p>) : null}
                </td>
            </tr>
        );
    }
}

CartItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    onChangeQuantity: PropTypes.func.isRequired,
    onRemoveItem: PropTypes.func.isRequired
}

export default CartItem;
