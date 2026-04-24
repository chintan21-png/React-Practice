// //https://dummyjson.com/users

import { useEffect, useState } from "react";
import Loader from "./Loader";
import UserCard from "./Card/UserCard";
import ErrorMessage from "./ErrorMessage";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(30);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/users?limit=${count}`,
        );
        if (!response.ok) {
          throw new Error("Something went wrong. Try again.");
        }
        const data = await response.json();
        setUsers(data.users);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, [count]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (users.length === 0) return <p>No users available</p>;

  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  const debouncedSearch = debounce((value) => {
    setSearch(value);
  }, 1000);

  return (
    <>
      <h1 class="mb-4 text-3xl font-bold text-heading md:text-5xl lg:text-6xl text-center bg-gray-700">
        <span class="text-transparent bg-clip-text bg-linear-to-r to-emerald-600 from-sky-400">
          Users
        </span>{" "}
        List :
      </h1>

      <input
        type="text"
        value={search}
        onChange={(e) => debouncedSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-full md:w-1/4 mx-auto text-center text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-amber-500 text-white placeholder-gray-200 focus:bg-amber-600 focus:text-white transition-colors duration-300"
        placeholder="Search users..."
      ></input>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        className="mb-4 p-2 border rounded w-full md:w-1/4 mx-auto text-center text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-amber-500 text-white placeholder-gray-200 focus:bg-amber-600 focus:text-white transition-colors duration-300"
        placeholder="Number of users to fetch"
      ></input>
      <p className="text-center mb-4 text-gray-600">
        Total Users: {users.length}
      </p>
      <div className="user-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
        {filteredUsers.length === 0 && <p>No results found</p>}
      </div>
    </>
  );
}

export default UserList;
