//import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const linkStyle = (path) =>
    `px-4 py-2 rounded-md text-sm font-medium ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">
        Kanban Dashboard
      </h1>

      <div className="flex gap-4">
        <Link to="/" className={linkStyle("/")}>
          Board
        </Link>

        <Link to="/dashboard" className={linkStyle("/dashboard")}>
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;