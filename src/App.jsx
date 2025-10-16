import { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // Conditional color for counter text
  const textColor =
    count > 0 ? "text-green-500" : count < 0 ? "text-red-500" : "text-gray-700";

  // Conditional button style
  const btnBase ="button style";
    
  const incBtn =
    count >= 5
      ? `${btnBase} bg-green-600 text-white`
      : `${btnBase} bg-green-400 hover:bg-green-500 text-white`;
  const decBtn =
    count <= -5
      ? `${btnBase} bg-red-600 text-white`
      : `${btnBase} bg-red-400 hover:bg-red-500 text-white`;
  const resetBtn = `${btnBase} bg-gray-400 hover:bg-gray-500 text-white`;

  return (
    <div className="counter-app">
      <h1 className="heading"> Counter App </h1>

      <div className={`${textColor}`}>{count}</div>

      <div className="button-group">
        <button onClick={() => setCount(count + 1)} className={incBtn}>
          Increment
        </button>
        
        <button onClick={() => setCount(0)} className={resetBtn}>
          Reset
        </button>
        <button onClick={() => setCount(count - 1)} className={decBtn}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
