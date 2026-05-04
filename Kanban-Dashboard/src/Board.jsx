import { useState, useEffect } from "react";
import TaskForm from "./components/Form/TaskForm";
import Columns from "./components/Columns/Columns";
import Modal from "./Modal";
//import { Link } from "react-router-dom";

const STORAGE_KEY = "kanban-data";
const Board = () => {
  //const [showForm, setShowForm] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
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
      <button
        onClick={() => setIsTaskModalOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4 font-bold text-center hover:bg-blue-700 cursor-pointer hover:scale-105"
      >
        + Add Task
      </button>
      <Modal
        isOpen={isTaskModalOpen}
        onClose={() => setIsTaskModalOpen(false)}
        title="Add New Task"
      >
        <TaskForm
          onAddTask={(data) => {
            addTask(data);
            setIsTaskModalOpen(false);
          }}
        />
      </Modal>
      <Columns columns={columns} onDeleteTask={deleteTask} />
    </div>
  );
};

export default Board;
