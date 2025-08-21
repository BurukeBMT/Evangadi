import React from "react";

class EvenCounterDisplayer extends React.Component {
  render() {
    return (
      <div>
        <p>Clicked {this.props.evenCount} times</p>
      </div>
    );
  }
}

export default EvenCounterDisplayer;
