import React from 'react';
import './style.css';
import useCounter from './useCounter';
export default function App() {
  const [count, increment, decrement] = useCounter();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
