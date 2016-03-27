import ProductsComponent from '../components/products';
import { connect } from 'react-redux';
import * as actions from '../actions'

const mapStateToProps = (state) => {
    return {
        quantityById: state.quantityById
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddItem: (id, price, quantity, product) => {
            dispatch(actions.addItem(id, price, quantity, product))
        }
    }
}

const Products = connect(mapStateToProps, mapDispatchToProps)(ProductsComponent);

export default Products;
