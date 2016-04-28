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

    onSetQuantityViaSelect = (newQuantity) => {
        if (newQuantity < 10) {
            this.props.onSetQuantity(this.props.id, newQuantity);
        } else {
            this.setState({
                freshTyping: true
            });
        }
    };

    onSetQuantityViaTyping= (newQuantity) => {
        this.props.onSetQuantity(this.props.id, newQuantity);
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
                this.onSetQuantityViaSelect(Number(e.target.value));
            }}>
                {quantityOptions}
                <option value={10}>10+</option>
            </select>
        );
    }

    deleteButton() {
        const {id} = this.props;
        const handleRemoveClick = () => {
            this.props.onRemoveItem(id);
        }
        return (
            <button
                type="button"
                className="btn btn-default btn-sm btn-danger-outline"
                onClick={handleRemoveClick}
            ><span
                className="fa fa-remove"
                aria-hidden="true"
            ></span> Remove</button>
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
                    onChange={this.onSetQuantityViaTyping}
                />
            );
        }
        return (
                <div className="row" style={{
                    margin: 0,
                    padding: '1em 0',
                    borderTop: '1px solid #ccc'
                }}>
                    <div className="col-sm-8">
                        <p><strong>{title || '@todo no title: ' + id}</strong></p>
                        <p>Short description goes here.</p>
                        <p>{this.deleteButton()}</p>
                    </div>
                    <div className="col-sm-2">
                        {quantitySelect}
                    </div>
                    <div className="col-sm-2 text-xs-right">
                            <p className="form-control-static">
                                <b>{this.formatMoney(price * quantity)}</b>
                            </p>
                        {(quantity > 1) ? (<p className="text-muted small">({this.formatMoney(price)} each)</p>) : null}
                    </div>
                </div>
        );
    }
}

CartItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    onSetQuantity: PropTypes.func.isRequired,
    onRemoveItem: PropTypes.func.isRequired
}

export default CartItem;
