// // import { useState } from "react";

// // function App() {
// //   const [num, setNum] = useState(0);

// //   function increment() {
// //     setNum(num + 1);
// //   }

// //   function decrement() {
// //     if(num <= 0) {
// //       return setNum(0);
// //     }
// //     else {
// //       return setNum(num - 1);
// //     }
// //   }

// //   return(
// //     <div>
// //       <button onClick={increment}>Increment Count</button>
// //       <p>My Age is : {num}</p>
// //       <button onClick={decrement}>Decrement Count</button>
// //     </div>
// //   )
// // };

// // export default App;
// // import { useState } from "react";
// // import Tv1 from "./assets/Tv1.jpg";
// // import Travel from "./assets/Travel.jpg";

// // function App() {
// //   const [img, setImage] = useState(Tv1);

// //   function changeImage() {
// //     setImage(Travel);
// //   }

// //   return (
// //     <div>
// //       <img src={img} alt="img1" height="200px" width="300px" />
// //       <button onClick={changeImage}>Change Image</button>
// //     </div>
// //   );
// // }

// // export default App;

// // function ShoppingCart() {

// //     const [cartCount, setCartCount] = useState(0);

// //     const addItem = () => {
// //         setCartCount(prevCount => prevCount + 1);
// //     }
// //     const removeItem = () => {
// //         setCartCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
// //     };

// //     return(
// //         <div style={{textAlign:"center"}}>
// //             <h2>Shopping Cart</h2>
// //             <p>Items in cart : {cartCount}</p>
// //             <button onClick={addItem}>Add to cart</button>
// //             <button onClick={removeItem} disabled={cartCount === 0}>Remove Item</button>
// //         </div>
// //     )
// // }
// // export default ShoppingCart;

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

// // import React, {useState} from "react";

// // export default function ToggleText () {
// //   const [isVisible, setIsVisible] = useState(false);

// //   return(
// //     <div style={{textAlign:"center", backgroundColor:"cyan", color:"yellowgreen"}}>
// //       <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? "Hide" : "Show"}Text</button>
// //       {isVisible && <p>This is the toggled text!</p>}
// //     </div>
// //   );
// // };

// import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
// import Explanation from "./components/Explaination/Explaination";

// const App = () => {
//     return(
//       <div className="app">
//         <ThemeToggle />
//       </div>
//     )
// }

// export default App;
//create a basic calculator app using react hooks make it responsive and visually appealing with some styling. The calculator should have two input fields for numbers and buttons for addition, subtraction, multiplication, and division. Display the result of the calculation below the buttons.
import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

    const handleCalculate = (operation) => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
        let calculatedResult;

        switch (operation) {
            case "add":
                calculatedResult = number1 + number2;
                break;
            case "subtract":
                calculatedResult = number1 - number2;
                break;
            case "multiply":
                calculatedResult = number1 * number2;
                break;
            case "divide":
                calculatedResult = number2 !== 0 ? number1 / number2 : null;
                break;
            default:
                calculatedResult = null;
        }

        setResult(calculatedResult);
    };
    return(
        <div style={{textAlign:"center", backgroundColor:"lightgray", padding:"20px", borderRadius:"10px", width:"300px", margin:"50px auto"}}>
            <h2>Basic Calculator</h2>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Enter first number"
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Enter second number"
            />
            <div>
                <button onClick={() => handleCalculate("add")}>Add</button>
                <button onClick={() => handleCalculate("subtract")}>Subtract</button>
                <button onClick={() => handleCalculate("multiply")}>Multiply</button>
                <button onClick={() => handleCalculate("divide")}>Divide</button>
            </div>
            {result !== null && <h3 style={{textAlign:"center", color:"blue", fontWeight:"bold"}}>Result: {result}</h3>}
        </div>  
    )
}

export default Calculator;