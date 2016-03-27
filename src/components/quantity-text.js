import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

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

    renderUpdateButton() {
        let updateable = (this.state.typedValue !== this.props.value) && (this.state.typedValue !== '');
        if (updateable) {
            return (
                <button className="btn btn-default btn-sm" onClick={this.updateAction}>Update</button>
            );
        }
        return null;
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
        return (
            <div>
                <input
                    className="form-control"
                    ref="input"
                    value={this.state.typedValue}
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}
                />
                {this.renderUpdateButton()}
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
