import CartComponent from '../components/cart';
import { connect } from 'react-redux';
import * as actions from '../actions'

const mapStateToProps = (state) => {
    return {
        items: state.items,
        quantityById: state.quantityById,
        detailsById: state.detailsById
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeQuantity: (id, value, isDelta = true) => {
            dispatch(actions.changeQuantity(id, value, isDelta))
        },
        onSetQuantity: (id, value) => {
            dispatch(actions.setQuantity(id, value))
        },
        onRemoveItem: (id) => {
            dispatch(actions.removeItem(id))
        }
    }
}

const Cart = connect(mapStateToProps, mapDispatchToProps)(CartComponent);

export default Cart;
