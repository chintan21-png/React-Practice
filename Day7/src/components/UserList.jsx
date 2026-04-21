// UserList.jsx
import React, { useEffect, useState } from 'react'
import UserCard from './Cards/UserCard'
import Loader from './Loader'
import ErrorMessage from './ErrorMessage'
function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [count, setCount] = useState(30)
    useEffect(() => {   
        async function fetchUsers() {
            try {
                const response = await fetch(`https://api.github.com/users?per_page=${count}`)    
                if (!response.ok) {
                    throw new Error('Failed to fetch users')
                }
                const data = await response.json()
                setUsers(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchUsers()
    }, [count])

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <ErrorMessage message={error} />
    }

    return (
        <>
        <h1 className="text-2xl font-bold mb-4 text-indigo-800 bg-amber-300 text-center cursor-pointer hover:scale-105">GitHub Users</h1>
        <input type='number' value={count} onChange={(e) => setCount(e.target.value)}></input>
        <div className="user-list">
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
        </>
    )       
}

export default UserList;