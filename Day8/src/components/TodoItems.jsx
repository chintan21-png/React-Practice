import React from 'react'
import { Check } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { X } from 'lucide-react';
import { Pencil } from 'lucide-react';

const TodoItems = ({text, id, isComplete, deleteTodo, toggle, handleEdit}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={() => {toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
          {isComplete ? <Check color='orange' size={24} /> : <X size={24} /> }
            <p className={`text-slate-700 ml-4 text-[17px] ${isComplete ? "line-through" : ""}`}>{text}</p>
        </div>

        <button onClick={() => {handleEdit(id)}}>
          <Pencil color='blue' size={24} />
        </button>
       
        <button onClick={() => {deleteTodo(id)}}>
          <Trash2 color='red' size={24} />
        </button>
        <div>
        </div>
    </div>
  )
};

export default TodoItems