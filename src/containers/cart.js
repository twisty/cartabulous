import CartComponent from '../components/cart';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        lines: state.lines,
        quantityById: state.quantityById,
        detailsById: state.detailsById
    }
}

const Cart = connect(mapStateToProps)(CartComponent);

export default Cart;
