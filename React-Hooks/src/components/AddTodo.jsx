import React, { useState } from 'react'

const AddTodo = ({ onAddTodo }) => {
    const [title, setTitle] = useState('');

  return (
    <>
        <input
            placeholder='Add todo'
            value={title}
            onChange={e => setTitle(e.target.value)}
        ></input>

        <button onClick={() => {
            setTitle('')
            onAddTodo(title);
        }}>Add</button>
    </>
  )
}

export default AddTodo