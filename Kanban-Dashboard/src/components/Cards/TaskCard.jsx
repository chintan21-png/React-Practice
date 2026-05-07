//import { useRef } from "react";

//import React from "react";
//import RetroCard from "../RetroCard";
const TaskCard = ({
  task,
  onDeleteTask,
  columnId,
  onEditTask,
  dragItem,
  dragContainer,
}) => {
  const handleDragStart = (e) => {
    // eslint-disable-next-line react-hooks/immutability
    dragItem.current = task;
    // eslint-disable-next-line react-hooks/immutability
    dragContainer.current = columnId;
    e.target.style.opacity = "0.5";
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  };

  return (
    
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className="text-center cursor-pointer"
    >
      <h4 className="font-mono text-lg font-bold mb-2 text-pink-500">{task.title}</h4>

      {task.description && (
        <p className="font-mono text-sm text-gray-700 dark:text-gray-300">{task.description}</p>
      )}

      <div className="text-center space-y-4 mt-2">
        <div
          className={`font-mono text-2xl font-bold ${
            task.priority === "high"
              ? "bg-red-500"
              : task.priority === "medium"
                ? "bg-yellow-500"
                : "bg-violet-800"
          }`}
        >
          {task.priority}
        </div>

        <div className="font-mono text-xs mb-2">{task.dueDate}</div>
      </div>
      <button
        onClick={() => onEditTask(task)}
        className="text-white cursor-pointer bg-blue-600 bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none"
      >
        Edit
      </button>
      <button
        onClick={() => onDeleteTask(columnId, task.id)}
        className="text-white cursor-pointer bg-red-600 bg-danger box-border border border-transparent hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none ml-2"
      >
        Delete
      </button>
    </div>
   
  );
};

export default TaskCard;
