import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props; //Destructuring arguments
    return (
      <div>
        <button
          onClick={onReset} //Refer to properties in Counter on App.js}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete} //Parent will handle(app.js)
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
