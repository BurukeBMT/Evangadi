import React, { useState } from "react";

const IncreaseDecreaseCount = () => {
  const [count, setCount] = useState(0);
  const state = useState(50);
  console.log(state);
  const increaseCount = () =>
    setCount((prevCount) => {
      return prevCount + 1;
    });
  const decreaseCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  return (
    <div>
      <h1 className="valueHolder">Count: {count}</h1>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", justifyContent: "center" }}>
        <button
          onClick={increaseCount}
          style={{
            background: "linear-gradient(90deg, #388e3c 40%, #81c784 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "0.7rem 1.5rem",
            fontSize: "1.1rem",
            fontWeight: "bold",
            boxShadow: "0 2px 8px rgba(56, 142, 60, 0.2)",
            cursor: "pointer"
          }}
        >
          Increase
        </button>
        <button
          onClick={decreaseCount}
          style={{
            background: "linear-gradient(90deg, #d32f2f 40%, #e57373 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "0.7rem 1.5rem",
            fontSize: "1.1rem",
            fontWeight: "bold",
            boxShadow: "0 2px 8px rgba(211, 47, 47, 0.2)",
            cursor: "pointer"
          }}
        >
          Decrease
        </button>
        <button
          onClick={resetCount}
          style={{
            background: "linear-gradient(90deg, #fbc02d 40%, #fff176 100%)",
            color: "#333",
            border: "none",
            borderRadius: "8px",
            padding: "0.7rem 1.5rem",
            fontSize: "1.1rem",
            fontWeight: "bold",
            boxShadow: "0 2px 8px rgba(251, 192, 45, 0.2)",
            cursor: "pointer"
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default IncreaseDecreaseCount;
