// CounterDisplayer.js
import React from "react";

class CounterDisplayer extends React.Component {
  render() {
    return (
      <div>
        <p>Number of Clicks: {this.props.count}</p>
      </div>
    );
  }
}

export default CounterDisplayer;
