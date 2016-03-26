import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

class Line extends Component {

    constructor(props) {
        super(props);
        this.state = {
            typing: false,
            typedQuantity: props.quantity
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            typedQuantity: nextProps.quantity
        });
    }

    componentDidUpdate() {
        if (this.state.typing === true) {
            let input = findDOMNode(this.refs.typedQuantity);
            let inputLength = input.value.length;
            input.focus();
            input.setSelectionRange(inputLength, inputLength);
        }
    }

    formatMoney(amount) {
        return '£' + (amount / 100).toFixed(2);
    }

    /**
     * Senders a select menu for choosing a quantity.
     */
    renderSelect() {
        const {id, title, price, quantity} = this.props;
        const selectQuantity = (newQuantity) => {
            if (newQuantity < 10) {
                this.props.onChangeQuantity(id, newQuantity, false);
                this.setState({
                    typing: false,
                    typedQuantity: newQuantity
                });
            } else {
                this.setState({
                    typing: true,
                });
            }
        }
        let quantityOptions = []
        for (let i = 1; i < 10; i++) {
            quantityOptions.push(
                <option key={i} value={i}>{i}</option>
            );
        }
        return (
            <select value={quantity} className="form-control" onChange={(e) => {
                selectQuantity(Number(e.target.value));
            }}>
                {quantityOptions}
                <option value={10}>10+</option>
            </select>
        );
    }

    renderTypedQuantity() {
        const {id, title, price, quantity} = this.props;
        let updateButton = null;
        let updateable = (this.state.typedQuantity !== quantity) && (this.state.typedQuantity !== '');
        let updateAction = () => {
            let value = this.refs.typedQuantity.value;
            let numberValue = parseInt(value, 10);
            if (Number.isNaN(numberValue) === false) {
                this.props.onChangeQuantity(this.props.id, Number(this.refs.typedQuantity.value), false);
                this.setState({
                    typing: false
                });
            }
        }
        if (updateable) {
            updateButton = (
                <button className="btn btn-default btn-sm" onClick={updateAction}>Update</button>
            );
        }
        return (
            <div>
                <input
                    className="form-control"
                    ref="typedQuantity"
                    value={this.state.typedQuantity}
                    onKeyDown={(e) => {
                        if(e.keyCode == 13) {
                            // hit return
                            updateAction();
                        }
                    }}
                    onChange={(e) => {
                        let value = this.refs.typedQuantity.value;
                        let numberValue = parseInt(value, 10);
                        if (Number.isNaN(numberValue) === false) {
                            this.setState({
                                typedQuantity: numberValue
                            });
                        } else if (value === '') {
                            this.setState({
                                typedQuantity: value
                            });
                        }
                    }}
                />
                {updateButton}
            </div>
        )
    }

    render() {
        const {id, title, price, quantity} = this.props;
        let quantitySelect;
        if ((quantity < 10) && (this.state.typing === false)) {
            quantitySelect = this.renderSelect();
        } else {
            quantitySelect = this.renderTypedQuantity();
        }
        return (
            <tr>
                <td>
                    <p><strong>{title || '@todo no title: ' + id}</strong></p>
                    <p>Short description goes here.</p>
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

Line.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onChangeQuantity: PropTypes.func.isRequired
}

export default Line;
