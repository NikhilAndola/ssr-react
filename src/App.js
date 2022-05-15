import * as React from 'react'
import './App.css';

function App() {
  const [count, setCount] = React.useState(0)

  const increment = () => {
      setCount(count+1)
  } 

  const decrement = () => {
    setCount(count-1)
  } 

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
