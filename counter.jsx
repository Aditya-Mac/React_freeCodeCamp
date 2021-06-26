import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
        
    }

    increment() {
        this.setState({
            count:this.state.count + 1}
        )
    }

    decrement() {
        this.setState({
            count:this.state.count - 1}
        )
    }

    reset() {
        this.setState({
            count:0}
        )
    }
    render() { 
        return (
            <div>
                <button className="btn btn-outline-primary m-2" onClick={this.increment}>Increment</button>
                <button className="btn btn-outline-secondary m-2" onClick={this.decrement}>Decrement</button>
                <button className="btn btn-outline-danger m-2" onClick={this.reset}>Reset</button>
                <h1>{this.state.count}</h1>
            </div>
         );
    }
}
 
export default Counter;
