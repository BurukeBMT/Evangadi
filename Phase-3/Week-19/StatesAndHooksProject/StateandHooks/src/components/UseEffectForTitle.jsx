import React, { useState, useEffect } from "react";

const UseEffectForTitle = () => {
  
  const [count, setCount] = useState(0);

  
  const incrementCount = () => setCount(count + 1);

  useEffect(() => {
    
    alert("Component is mounted");},[]);
  useEffect(()=>{

    document.title = `Count: ${count}`;
  }, [count]); 

  return (
    <div>
      <h1 className="valueHolder">Count: {count}</h1>
      <button
        onClick={incrementCount}
        style={{
          background: "linear-gradient(90deg, #8e24aa 40%, #ce93d8 100%)",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "0.7rem 1.5rem",
          fontSize: "1.1rem",
          fontWeight: "bold",
          boxShadow: "0 2px 8px rgba(142, 36, 170, 0.2)",
          cursor: "pointer",
          marginTop: "1rem"
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default UseEffectForTitle;
