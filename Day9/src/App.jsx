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
import { useCallback, useMemo, useState } from "react"
import Sum from "./Sum";
import Post from "./Post";

function App() {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(100000);

    const handleClick = useCallback(() => {
        console.log("Handle Click", count);
    },[count]);

    const prime = useMemo(() => {
        let total = 0;

        if (number > 1) {
            total++;
        }
        for(let i=3; i<= number; i++) {
            total++;
            for(let j=2; j<i; j++) {
                if(i%j==0) {
                    total --;
                    break;
                }
            }
        }
        return total;
    },[number])

    const obj = useMemo(() => {
        return {name: "XYZ", age:20};
    },[])
    console.log("app render")
    return(
        <>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <h2>Your current Number: {number}</h2>
            <button onClick={() => setNumber(prev => prev + 10000)}>Increment Number</button>
            <h3>Total Prime number: {prime}</h3>
            <button onClick={handleClick}>click</button>
            <Sum number={number}/>
            <Post value={obj}/>
        </>
    );
};

export default App;




