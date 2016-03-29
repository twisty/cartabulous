import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class QuantityText extends Component {

    constructor(props) {
        super(props);
        this.state = {
            typedValue: props.value
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            typedValue: props.value
        });
    }

    componentDidMount() {
        if (this.props.active) {
            let input = findDOMNode(this.refs.input);
            let inputLength = input.value.length;
            input.focus();
            input.setSelectionRange(inputLength, inputLength);
        }
    }

    updateAction = () => {
        let value = this.refs.input.value;
        let numberValue = parseInt(value, 10);
        if (Number.isNaN(numberValue) === false) {
            this.props.onChange(numberValue);
        }
    };

    shouldShowUpdateButton() {
        return (this.state.typedValue !== this.props.value) && (this.state.typedValue !== '');
    }

    render() {
        const handleChange = (event) => {
            let value = event.target.value;
            let numberValue = parseInt(value, 10);
            if (Number.isNaN(numberValue) === false) {
                this.setState({
                    typedValue: numberValue
                });
            } else if (value === '') {
                this.setState({
                    typedValue: value
                });
            }
        }
        const handleKeyDown = (event) => {
            // Attempt to update if the <kbd>Enter</kbd> key is pressed.
            if (13 === event.keyCode) {
                this.updateAction();
            }
        }
        let input = (
            <input
                className="form-control"
                ref="input"
                value={this.state.typedValue}
                onKeyDown={handleKeyDown}
                onChange={handleChange}
            />
        );
        let updateButton = null;
        if (this.shouldShowUpdateButton()) {
            updateButton = (
                <button
                    key="updatebutton"
                    type="button"
                    className="btn btn-sm btn-success-outline"
                    onClick={this.updateAction}
                ><span className="fa fa-refresh"></span> Update</button>
            );
        }
        return (
            <div>
                {input}
                <div>
                <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                    {updateButton}
                </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}

QuantityText.propTypes = {
    active: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default QuantityText;
