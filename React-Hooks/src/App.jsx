// // // // import { useState } from "react";

// // // // function App() {
// // // //   const [num, setNum] = useState(0);

// // // //   function increment() {
// // // //     setNum(num + 1);
// // // //   }

// // // //   function decrement() {
// // // //     if(num <= 0) {
// // // //       return setNum(0);
// // // //     }
// // // //     else {
// // // //       return setNum(num - 1);
// // // //     }
// // // //   }

// // // //   return(
// // // //     <div>
// // // //       <button onClick={increment}>Increment Count</button>
// // // //       <p>My Age is : {num}</p>
// // // //       <button onClick={decrement}>Decrement Count</button>
// // // //     </div>
// // // //   )
// // // // };

// // // // export default App;
// // // // import { useState } from "react";
// // // // import Tv1 from "./assets/Tv1.jpg";
// // // // import Travel from "./assets/Travel.jpg";

// // // // function App() {
// // // //   const [img, setImage] = useState(Tv1);

// // // //   function changeImage() {
// // // //     setImage(Travel);
// // // //   }

// // // //   return (
// // // //     <div>
// // // //       <img src={img} alt="img1" height="200px" width="300px" />
// // // //       <button onClick={changeImage}>Change Image</button>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;

// // // // function ShoppingCart() {

// // // //     const [cartCount, setCartCount] = useState(0);

// // // //     const addItem = () => {
// // // //         setCartCount(prevCount => prevCount + 1);
// // // //     }
// // // //     const removeItem = () => {
// // // //         setCartCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
// // // //     };

// // // //     return(
// // // //         <div style={{textAlign:"center"}}>
// // // //             <h2>Shopping Cart</h2>
// // // //             <p>Items in cart : {cartCount}</p>
// // // //             <button onClick={addItem}>Add to cart</button>
// // // //             <button onClick={removeItem} disabled={cartCount === 0}>Remove Item</button>
// // // //         </div>
// // // //     )
// // // // }
// // // // export default ShoppingCart;

// // import { useState } from "react";
// // import AddTodo from "./components/AddTodo";
// // import TaskList from "./components/TaskList";

// // let nextId = 3;

// // const initialTodo = [
// //   { id: 0, title: "Buy Milk", done: false },
// //   { id: 1, title: "Go to Market", done: true },
// //   { id: 2, title: "Back to Home", done: false },
// // ];

// // export default function TaskApp() {
// //   const [todos, setTodos] = useState(initialTodo);

// //   function handleAddTodo(title) {
// //     setTodos([
// //       ...todos,
// //       {
// //         id: nextId++,
// //         title: title,
// //         done: false,
// //       },
// //     ]);
// //   }
// //   function handleChangeTodo(nextTodo) {
// //     setTodos(
// //       todos.map((t) => {
// //         if (t.id === nextTodo.id) {
// //           return nextTodo;
// //         } else {
// //           return t;
// //         }
// //       }),
// //     );
// //   }

// //   function handleDeleteTodo(todoId) {
// //     setTodos(todos.filter((t) => t.id !== todoId));
// //   }
// //   return (
// //     <>
// //       <AddTodo onAddTodo={handleAddTodo} />
// //       <TaskList
// //         todos={todos}
// //         onChangeTodo={handleChangeTodo}
// //         onDeleteTodo={handleDeleteTodo}
// //       />
// //     </>
// //   );
// // };

// // // // import React, {useState} from "react";

// // // // export default function ToggleText () {
// // // //   const [isVisible, setIsVisible] = useState(false);

// // // //   return(
// // // //     <div style={{textAlign:"center", backgroundColor:"cyan", color:"yellowgreen"}}>
// // // //       <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? "Hide" : "Show"}Text</button>
// // // //       {isVisible && <p>This is the toggled text!</p>}
// // // //     </div>
// // // //   );
// // // // };

// // // import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
// // // import Explanation from "./components/Explaination/Explaination";

// // // const App = () => {
// // //     return(
// // //       <div className="app">
// // //         <ThemeToggle />
// // //       </div>
// // //     )
// // // }

// // // export default App;
// // //create a basic calculator app using react hooks make it responsive and visually appealing with some styling. The calculator should have two input fields for numbers and buttons for addition, subtraction, multiplication, and division. Display the result of the calculation below the buttons.
// // import React, { useState } from "react";

// // function Calculator() {
// //   const [num1, setNum1] = useState("");
// //   const [num2, setNum2] = useState("");
// //   const [result, setResult] = useState(null);

// //     const handleCalculate = (operation) => {
// //         const number1 = parseFloat(num1);
// //         const number2 = parseFloat(num2);
// //         let calculatedResult;

// //         switch (operation) {
// //             case "add":
// //                 calculatedResult = number1 + number2;
// //                 break;
// //             case "subtract":
// //                 calculatedResult = number1 - number2;
// //                 break;
// //             case "multiply":
// //                 calculatedResult = number1 * number2;
// //                 break;
// //             case "divide":
// //                 calculatedResult = number2 === 0 ? null : number1 / number2;
// //                 break;
// //             default:
// //                 calculatedResult = null;
// //         }

// //         setResult(calculatedResult);
// //     };
// //     return(
// //         <div style={{textAlign:"center", backgroundColor:"lightgray", padding:"20px", borderRadius:"10px", width:"300px", margin:"50px auto"}}>
// //             <h2>Basic Calculator</h2>
// //             <input
// //                 type="number"
// //                 value={num1}
// //                 onChange={(e) => setNum1(e.target.value)}
// //                 placeholder="Enter first number"
// //             />
// //             <input
// //                 type="number"
// //                 value={num2}
// //                 onChange={(e) => setNum2(e.target.value)}
// //                 placeholder="Enter second number"
// //             />
// //             <div>
// //                 <button onClick={() => handleCalculate("add")}>Add</button>
// //                 <button onClick={() => handleCalculate("subtract")}>Subtract</button>
// //                 <button onClick={() => handleCalculate("multiply")}>Multiply</button>
// //                 <button onClick={() => handleCalculate("divide")}>Divide</button>
// //             </div>
// //             {result !== null && <h3 style={{textAlign:"center", color:"blue", fontWeight:"bold"}}>Result: {result}</h3>}
// //         </div>  
// //     )
// // }

// // export default Calculator;
// // import React from 'react'

// // const App = () => {
// //   return (
// //     <div>
// //         <h1 className='text-3xl font-bold underline text-center text-cyan-500 bg-amber-300'>My App</h1>
// //     </div>
// //   )
// // }

// // export default App

// //useEffect Hook

// //Users fetching example without useEffect Hook

// // import { useState } from "react";
// // function App() {
// //   const [users, setUsers] = useState([]);
// //   async function fetchUserData() {
// //     const response = await fetch("https://api.github.com/users");
// //     const data = await response.json();
// //     setUsers(data);
// //     //console.log("hello");
// //   }

// //   fetchUserData();
  
// //   return(
// //     <>
// //       <h1>Github User</h1>
// //       <div className="flex justify-center items-center flex-wrap gap-2.5">
// //         {users.map((user) => (
// //           <img src={user.avatar_url} height="100px" width="100px" />
// //         ))}
// //       </div>
// //     </>
// //   )
// // }

// // export default App;

// //Users fetching example with useEffect Hook

// import { useState, useEffect } from "react";

// // function App() {
// //   const [users, setUsers] = useState([]);
// //   const [count, setCount] = useState(30);
  
// //   useEffect(() => {
// //     async function fetchUserData() {
// //       const response = await fetch(`https://api.github.com/users?per_page=${count}`);
// //       const data = await response.json();
// //       setUsers(data);
// //       console.log("hello");
// //     }
// //     fetchUserData();
// //   }, [count]);

// //   return (
// //     <>
// //       <h1>Github User</h1>
// //       <input type="number" value={count} onChange={(e) => setCount(e.target.value)}></input>
// //       <div className="flex justify-center items-center flex-wrap gap-2.5">
// //         {users.map((user) => (
// //           <img src={user.avatar_url} height="100px" width="100px" key={user.login} />
// //         ))}
// //       </div>
// //     </>
// //   );
// // }

// // export default App;

// //Create a clock component that displays the current time and updates every second using useEffect Hook using TailwindCss.

// function Clock() {
//   const [time, setTime] = useState(new Date().toLocaleTimeString());
//   const [show, setShow] = useState(true);

//   useEffect(() => {
//     if(!show) {
//       return;
//     };
//     const intervalId = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//       console.log("Time updated");
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [show]);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="text-4xl font-bold text-blue-500 bg-white p-10 rounded-lg shadow-lg">
//         <button onClick={() => setShow(!show)} className="ml-4 bg-blue-500 text-white py-2 px-4 rounded">
//           {show ? "Hide" : "Show"}
//         </button>
//         {
//           show && <h1>Current Time : {time}</h1>
//         }
//       </div>
//     </div>
//   );
// }

// export default Clock;

//Create a simple counter component that increments the count every second using useEffect Hook and displays the count on the screen.

// import { useState, useEffect } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [show, setShow] = useState(true);

//   useEffect(() => {
//     if(!show) {
//       return;
//     }
//     const intervalId = setInterval(() => {
//       setCount(prevCount => prevCount + 1);
//       console.log("Count updated");
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [show]);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="text-4xl font-bold text-green-500 bg-white p-10 rounded-lg shadow-lg">
//         <button onClick={() => setShow(!show)} className="ml-4 bg-green-500 text-white py-2 px-4 rounded">
//           {show ? "Hide" : "Show"}
//         </button>
//         {
//           show && <h1>Count : {count}</h1>
//         }
//       </div>
//     </div>
//   );
// }

// export default Counter;

//useEffect mounting and unmounting example theory

// useEffect(() => {
//   console.log("Component mounted");

//   return () => {
//     console.log("Component unmounted");
//   };
// }, []);

//In the above code, the useEffect hook is used to log a message when the component is mounted and another message when the component is unmounted. The empty dependency array ([]) ensures that the effect runs only once when the component is first rendered and the cleanup function runs when the component is removed from the DOM.       

//what is mounting and unmounting in react?

//Mounting in React refers to the process of creating and inserting a component into the DOM for the first time. When a component is mounted, it goes through a series of lifecycle methods (like constructor, render, componentDidMount) that allow you to set up the component's state, fetch data, or perform any necessary initialization.

//Unmounting in React refers to the process of removing a component from the DOM. When a component is unmounted, it goes through lifecycle methods (like componentWillUnmount) that allow you to clean up any resources, cancel timers, or perform any necessary cleanup before the component is removed from the DOM.

//In summary, mounting is the process of creating and inserting a component into the DOM, while unmounting is the process of removing a component from the DOM.

//In functional components, the useEffect hook can be used to handle both mounting and unmounting logic. By providing an empty dependency array ([]) to useEffect, you can ensure that the effect runs only once when the component is mounted, and the cleanup function will run when the component is unmounted.

import { useState, useEffect } from "react";

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await fetch("https://api.github.com/users");
                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchUserData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <h1>Github Users</h1>
            <div className="flex justify-center items-center flex-nowrap gap-2.5">
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {/* <img src={user.avatar_url} alt={user.login} height="100px" width="100px" /> */}
                            {user.login}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );  
};
export default App;

