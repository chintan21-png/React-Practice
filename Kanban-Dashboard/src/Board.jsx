import { useState, useEffect } from "react";
import TaskForm from "./components/Form/TaskForm";
import Columns from "./components/Columns/Columns";
import Modal from "./Modal";
//import { Link } from "react-router-dom";

const STORAGE_KEY = "kanban-data";
const Board = () => {
  //const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filterPriority, setFilterPriority] = useState("");
  const [columns, setColumns] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved
      ? JSON.parse(saved)
      : {
          todo: { name: "To Do", items: [] },
          inProgress: { name: "In Progress", items: [] },
          review: { name: "Review", items: [] },
          done: { name: "Done", items: [] },
        };
  });
  const filteredColumns = Object.fromEntries(
    Object.entries(columns).map(([colId, col]) => {
      const filteredItems = col.items.filter((task) => {
        const matchesSearch =
          task.title.toLowerCase().includes(search.toLowerCase()) ||
          task.description?.toLowerCase().includes(search.toLowerCase());

        const matchesPriority = filterPriority
          ? task.priority === filterPriority
          : true;

        return matchesSearch && matchesPriority;
      });

      return [
        colId,
        {
          ...col,
          items: filteredItems,
        },
      ];
    }),
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(columns));
  }, [columns]);

  const addTask = (taskData) => {
    const newTask = {
      id: Date.now().toString(),
      ...taskData,
    };

    setColumns((prev) => ({
      ...prev,
      todo: {
        ...prev.todo,
        items: [...prev.todo.items, newTask],
      },
    }));
  };
  const updateTask = (updatedTask) => {
    setColumns((prev) => {
      const newColumns = { ...prev };

      Object.keys(newColumns).forEach((colId) => {
        newColumns[colId].items = newColumns[colId].items.map((task) =>
          task.id === updatedTask.id ? updatedTask : task,
        );
      });

      return newColumns;
    });
  };
  const deleteTask = (columnId, taskId) => {
    setColumns((prev) => ({
      ...prev,
      [columnId]: {
        ...prev[columnId],
        items: prev[columnId].items.filter((task) => task.id !== taskId),
      },
    }));
  };
  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="Search for Task..."
        onChange={(e) => setSearch(e.target.value)}
        className="border px-4 py-2 rounded-md w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></input>
      <select
        value={filterPriority}
        onChange={(e) => setFilterPriority(e.target.value)}
        className="border px-3 py-2 rounded-md"
      >
        <option value="">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button
        onClick={() => setIsTaskModalOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4 font-bold text-center hover:bg-blue-700 cursor-pointer hover:scale-105"
      >
        + Add Task
      </button>
      <Modal
        isOpen={isTaskModalOpen}
        onClose={() => {
          setIsTaskModalOpen(false);
          setEditingTask(null);
        }}
        title={editingTask ? "Edit Task" : "Add Task"}
      >
        <TaskForm
          initialData={editingTask}
          onSubmit={(data) => {
            if (editingTask) {
              updateTask({ ...editingTask, ...data });
            } else {
              addTask(data);
            }

            setIsTaskModalOpen(false);
            setEditingTask(null);
          }}
        />
      </Modal>
      <Columns
        columns={filteredColumns}
        onDeleteTask={deleteTask}
        onEditTask={(task) => {
          setEditingTask(task);
          setIsTaskModalOpen(true);
        }}
      />
    </div>
  );
};

export default Board;
