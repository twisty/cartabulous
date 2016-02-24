import React, { Component, PropTypes } from 'react';

class Line extends Component
{
    render() {
        const {id, title, price, quantity} = this.props;
        const changeQuantity = (e) => {
            console.log('change quantity', e.target.value);
        };
        return (
            <tr>
                <td>{title || '@todo no title: ' + id}</td>
                <td>{price}</td>
                <td>
                    <div className="col-xs-2">
                        <div className="input-group">
                            <span className="input-group-btn">
                                <button className="btn btn-default" onClick={changeQuantity} value={-1}>-</button>
                            </span>
                            <input className="form-control" type="number" defaultValue={quantity} />
                            <span className="input-group-btn">
                                <button className="btn btn-default" onClick={changeQuantity} value={1}>+</button>
                            </span>
                        </div>
                    </div>
                </td>
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
