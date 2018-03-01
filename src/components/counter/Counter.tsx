import * as React from 'react';

interface CounterProps {
    initialCount?: number;
}

interface CounterState {
    count: number;
}

export default class Counter extends React.Component<CounterProps, CounterState> {

    state = {
        count: this.props.initialCount || 0,
    };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render(): JSX.Element {
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
