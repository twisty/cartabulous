import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'

let Line = (props) => {
    const {id, title, price, quantity, onChangeQuantity} = props;
    return (
        <tr>
            <td>{title || '@todo no title: ' + id}</td>
            <td>{price}</td>
            <td className="col-sm-3">
                <div className="input-group">
                    <span className="input-group-btn">
                        <button className="btn btn-default" onClick={onChangeQuantity.bind(this, id, -1)}>-</button>
                    </span>
                    <input className="form-control" type="number" onChange={(e) => {
                        onChangeQuantity(id, Number(e.target.value), false);
                    }} value={quantity} />
                    <span className="input-group-btn">
                        <button className="btn btn-default" onClick={onChangeQuantity.bind(this, id, 1)}>+</button>
                    </span>
                </div>
            </td>
            <td>{price * quantity}</td>
        </tr>
    );
}

Line.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onChangeQuantity: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeQuantity: (id, value, isDelta = true) => {
            dispatch(actions.changeQuantity(id, value, isDelta))
        }
    }
}

Line = connect(mapStateToProps, mapDispatchToProps)(Line);

export default Line;
