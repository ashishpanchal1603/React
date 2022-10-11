import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.value,
    };
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <>
        <div className="counter">
          <button
            className="btn btn-warning increment fw-bold"
            onClick={() => this.increment()}
          >
            +
          </button>
          <span>{this.state.count}</span>
          <button
            className="btn btn-danger decrement fw-bold"
            onClick={() => this.decrement()}
          >
            -
          </button>
        </div>
      </>
    );
  }
}
