import React, { useEffect, useRef, useState } from "react";
import { ListTodo } from "lucide-react";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }
    // console.log(text);
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
     setTodoList((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prev) => {
        return prev.map((item) => {
            if(item.id === id) {
                return {...item, isComplete: !item.isComplete}
            }
            return item;
        })
    })
  };
  useEffect(() => {
    console.log(todoList);
  },[todoList]) 
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <ListTodo size={24} />
        <h1 className="text-3xl  font-semibold">To-Do List</h1>
      </div>

      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your Task"
        ></input>
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          Add +
        </button>
      </div>

      <div>
        {todoList.map((item, index) => {
          return (
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
