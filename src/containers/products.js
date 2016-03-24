import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

let Products = (props) => {
    let productNodes = props.products.map(product => {
        return (
            <tr key={product.id}>
                <td>{product.title}</td>
                <td>
                    <button onClick={() => {
                        let quantity = 1;
                        props.dispatch(actions.addProduct(product.id, product.price, quantity, product));
                        console.log(product);
                    }}>Add to cart</button>
                </td>
            </tr>
        );
    });
    return (
        <table className="table">
            <tbody>
                {productNodes}
            </tbody>
        </table>
    )
}

Products.propTypes = {
    products: PropTypes.array.isRequired
};

Products = connect()(Products);

export default Products;
