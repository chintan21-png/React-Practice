import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  function increment() {
    setNum(num + 1);
  }

  function decrement() {
    if(num <= 0) {
      return setNum(0);
    }
    else {
      return setNum(num - 1);
    }
  }

  return(
    <div>
      <button onClick={increment}>Increment Count</button>
      <p>My Age is : {num}</p>
      <button onClick={decrement}>Decrement Count</button>
    </div>
  )
};

export default App;