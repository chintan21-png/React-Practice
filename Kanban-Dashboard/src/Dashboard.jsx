//import React from "react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "kanban-data";

const Dashboard = () => {
  const [columns, setColumns] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      setColumns(JSON.parse(data));
    }
  }, []);

  if (!columns) return <p>Loading...</p>;

  const totalTasks = Object.values(columns).reduce(
    (acc, col) => acc + col.items.length,
    0
  );

  const completedTasks = columns.done.items.length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-blue-100 p-4 rounded-lg text-center shadow">
          <h2 className="text-lg font-semibold">Total Tasks</h2>
          <p className="text-2xl">{totalTasks}</p>
        </div>

        <div className="bg-green-100 p-4 rounded-lg text-center shadow">
          <h2 className="text-lg font-semibold">Completed</h2>
          <p className="text-2xl">{completedTasks}</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded-lg text-center shadow">
          <h2 className="text-lg font-semibold">Pending</h2>
          <p className="text-2xl">{pendingTasks}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;