// App.js
import MyCounter from "./components/MyCounter";
import "./App.css";
import IncreaseDecreaseCount from "./components/IncreaseDecreaseCount";
import UseEffectForTitle from "./components/UseEffectForTitle";
import CounterDisplayer from "./components/CounterDisplayer";

function App() {
  return (
    <div className="all-questions" style={{ display: "flex", flexDirection: "column", gap: "2rem", padding: "2rem" }}>
      <div className="question" style={{ border: "2px solid #1976d2", borderRadius: "10px", padding: "1rem", background: "#e3f2fd" }}>
        <h3>Question 1 & 2: Click Counter (Class Component)</h3>
        <MyCounter />
      </div>
      <div className="question" style={{ border: "2px solid #388e3c", borderRadius: "10px", padding: "1rem", background: "#e8f5e9" }}>
        <h3>Question 3: Increase/Decrease/Reset (Hooks)</h3>
        <IncreaseDecreaseCount />
      </div>
      <div className="question" style={{ border: "2px solid #fbc02d", borderRadius: "10px", padding: "1rem", background: "#fffde7" }}>
        <h3>Question 4: useEffect for Title (Hooks)</h3>
        <UseEffectForTitle />
      </div>
    </div>
  );
}

export default App;