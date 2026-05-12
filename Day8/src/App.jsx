import React from "react";
import Todo from "./components/Todo";
// import SignUp from "./components/Auth/SignUp";
//import Form from "./components/Form";
// import ZodForm from "./components/ZodForm";
function App() {
  return (
    <div className="bg-stone-900 grid py-4 min-h-screen">
      <Todo />
      {/* <SignUp />  */}
      {/* <Form /> */}
      {/* <ZodForm /> */}
    </div>
  );
}

export default App;