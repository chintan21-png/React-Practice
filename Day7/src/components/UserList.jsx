// UserList.jsx
import React, { useEffect, useState } from 'react'
import UserCard from './Cards/UserCard'
import Loader from './Loader'
import ErrorMessage from './ErrorMessage'
function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
    useEffect(() => {   
        async function fetchUsers() {
            try {
                const response = await fetch('https://api.github.com/users')    
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
    }, [])

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <ErrorMessage message={error} />
    }

    return (
        <div className="user-list">
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    )       
}

export default UserList;