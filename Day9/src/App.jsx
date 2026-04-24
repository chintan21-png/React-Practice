// import UserList from "./components/UserList";
// function App() {
//   return (
//     <div className="App">
//       <UserList />
//     </div>
//   );
// }

// export default App;

//useMemo hook
import { useState } from "react"
import Sum from "./Sum";

function App() {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0);
    console.log("app render")
    return(
        <>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <h2>Your current Number: {number}</h2>
            <button onClick={() => setNumber(prev => prev + 100)}>Increment Number</button>
            <Sum number={number}/>
        </>
    );
};

export default App;




