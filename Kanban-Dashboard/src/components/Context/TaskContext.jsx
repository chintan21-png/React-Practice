import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const [columns, setColumns] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("columns")) || [
        { id: "todo", name: "To Do" },
        { id: "in-progress", name: "In Progress" },
        { id: "review", name: "Review" },
        { id: "done", name: "Done" },
      ]
    );
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("columns", JSON.stringify(columns));
  }, [tasks, columns]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, { ...task, id: Date.now(), status: "todo" }]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const updateTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
    );
  };

  const moveTask = (id, newStatus) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t))
    );
  };

  const addColumn = (name) => {
    const id = name.toLowerCase().replace(/\s/g, "-");
    setColumns((prev) => [...prev, { id, name }]);
  };

  const deleteColumn = (id) => {
    setColumns((prev) => prev.filter((col) => col.id !== id));
  };

  const renameColumn = (id, newName) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === id ? { ...col, name: newName } : col
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        columns,
        addTask,
        deleteTask,
        updateTask,
        moveTask,
        addColumn,
        deleteColumn,
        renameColumn,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}