import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {
    static propTypes = {
        initialCount: PropTypes.number,
    };

    static defaultProps = {
        initialCount: 0,
    };

    state = {
        count: this.props.initialCount,
    };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    };

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        );
    }
}
