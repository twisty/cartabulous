import React, { Component, PropTypes } from 'react';

class Line extends Component
{
    render() {
        const {id, title, price, quantity} = this.props;
        return (
            <tr>
                <td>{title || '@todo no title: ' + id}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{price * quantity}</td>
            </tr>
        );
    }
}

Line.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
}

export default Line;
