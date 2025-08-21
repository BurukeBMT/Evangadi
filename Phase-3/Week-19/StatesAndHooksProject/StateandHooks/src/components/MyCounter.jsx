
import React from "react";
import CounterDisplayer from "./CounterDisplayer";
import EvenCounterDisplayer from "./EvenCounterDisplayer";

class MyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
      evenClickCount: 0,
    };
    this.allClicksCounter = this.allClicksCounter.bind(this);
  }
  allClicksCounter = () => {
    this.setState(
      (prevState) => {
        const newCount = prevState.clickCount + 1;
        return {
          clickCount: newCount,
          evenClickCount: newCount % 2 === 0 ? newCount : prevState.evenClickCount,
        };
      }
    );
  };

  render() {
    return (
      <div>
        {/* Pass click count to CounterDisplayer */}
        <div className="valueHolder">
          <button
            onClick={this.allClicksCounter}
            style={{
              background: "linear-gradient(90deg, #1976d2 40%, #64b5f6 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "0.7rem 1.5rem",
              fontSize: "1.1rem",
              fontWeight: "bold",
              boxShadow: "0 2px 8px rgba(25, 118, 210, 0.2)",
              cursor: "pointer",
              marginBottom: "1rem"
            }}
          >
            Click me
          </button>
          <CounterDisplayer count={this.state.clickCount} />
          {/* Pass even click count to EvenCounterDisplayer */}
          <EvenCounterDisplayer evenCount={this.state.evenClickCount} />
        </div>
      </div>
    );
  }
}

export default MyCounter;
