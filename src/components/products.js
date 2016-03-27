import React, { PropTypes } from 'react';

let Products = (props) => {
    let productNodes = props.products.map(product => {
        const { id, title, price } = product;
        const quantity = props.quantityById[id];
        const inBasketBadge = () => {
            if (quantity) {
                return (
                    <span className="badge">{quantity}</span>
                );
            }
            return null;
        }
        const buttonText = () => {
            return (quantity) ? ' In cart, add another' : 'Add to cart';
        }
        return (
            <tr key={id}>
                <td>{title}</td>
                <td>£{(price / 100).toFixed(2)}</td>
                <td>
                    <button className="btn btn-primary" onClick={() => {
                        let quantity = 1;
                        props.onAddItem(id, price, quantity, product)
                    }}>{inBasketBadge()}{buttonText()}</button>
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
    onAddItem: PropTypes.func.isRequired,
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ]),
            price: PropTypes.number.isRequired
        })
    ).isRequired,
    quantityById: PropTypes.object.isRequired
};

export default Products;
