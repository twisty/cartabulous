import React, { PropTypes } from 'react';

let Products = (props) => {
    let productNodes = props.products.map(product => {
        const { id, title, price } = product;
        const quantity = props.quantityById[id];
        const inBasketBadge = () => {
            if (quantity) {
                return (
                    <span className="text-muted small">({quantity} in cart)</span>
                );
            }
            return null;
        }
        const buttonText = () => {
            return (quantity) ? ' Add another' : 'Add to cart';
        }
        return (
            <div className="card" key={id}>
                <div className="card-block">
                    <div className="row">
                        <div className="col-sm-8">
                            <h4 className="card-title">{title}</h4>
                            <p className="card-title">A description goes here.</p>
                        </div>
                        <div className="col-sm-4">
                            <div className="row">
                                <div className="col-xs-6">
                                    <p className="card-text">{inBasketBadge()}</p>
                                </div>
                                <div className="col-xs-6 text-xs-right">
                                    <p className="card-text"><b>£{(price / 100).toFixed(2)}</b></p>
                                </div>
                            </div>
                            <p className="card-text">
                                <button
                                    type="button"
                                    className="btn btn-primary-outline btn-block"
                                    onClick={() => {
                                        let quantity = 1;
                                        props.onAddItem(id, price, quantity, product)
                                    }}
                                >{buttonText()}</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <div>
                {productNodes}
        </div>
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
