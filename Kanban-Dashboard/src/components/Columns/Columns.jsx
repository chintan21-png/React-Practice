//import React from "react";
import TaskCard from "../Cards/TaskCard";

const Columns = ({ columns, onDeleteTask}) => {
  return (
    <div className="flex gap-6 p-6 overflow-x-auto">
      {Object.entries(columns).map(([id, column]) => (
        <div
          key={id}
          className="bg-gray-100 p-4 rounded-xl w-64 min-h-75 shadow-sm"
        >
          <h3 className="text-lg font-semibold mb-4 text-center">
            {column.name}
          </h3>

          {column.items.length === 0 ? (
            <p className="text-gray-500 text-sm text-center">
              No tasks
            </p>
          ) : (
            column.items.map((task) => (
              <TaskCard key={task.id} task={task} onDeleteTask={onDeleteTask} columnId={id} />
            ))
          )}
        </div>
      ))}
    </div>
  );
};

export default Columns;