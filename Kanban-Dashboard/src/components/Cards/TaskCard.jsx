//import React from "react";

const TaskCard = ({ task, onDeleteTask, columnId }) => {
  return (
    <div className="bg-white p-3 rounded-lg mb-3 shadow hover:shadow-md transition">
      <h4 className="font-semibold text-sm">{task.title}</h4>

      {task.description && (
        <p className="text-xs text-gray-600 mt-1">
          {task.description}
        </p>
      )}

      <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
        <span
          className={`px-2 py-1 rounded-full text-white ${
            task.priority === "high"
              ? "bg-red-500"
              : task.priority === "medium"
              ? "bg-yellow-500"
              : "bg-green-500"
          }`}
        >
          {task.priority}
        </span>

        <span>{task.dueDate}</span>
      </div>
      <button
        onClick={() => onDeleteTask(columnId, task.id)}
        className="mt-2 text-red-500 text-xs hover:underline"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskCard;