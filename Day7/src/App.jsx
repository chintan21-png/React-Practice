// //https://api.github.com/users
// //– Component Architecture
// Concepts:

// Separation of concerns
// Task:
// Refactor API app into:

// UserList
// UserCard
// Loader
// ErrorMessage
// Output:
// Proper structure (no single-file mess)
import React from 'react'
import UserList from './components/UserList'

function App() {
  return (
    <div className="App">
      <UserList />
    </div>
  )
}

export default App;
