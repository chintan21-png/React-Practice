import { useTaskContext } from '../Context/TaskContext';
import { useState } from 'react';

function TaskCard({ task }) {
  const { deleteTask, updateTask } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  const priorityColors = {
    low: 'bg-green-200 border-green-400',
    medium: 'bg-yellow-200 border-yellow-400',
    high: 'bg-red-200 border-red-400'
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleUpdate = () => {
    updateTask({ ...task, title: editTitle });
    setIsEditing(false);
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', task.id);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className={`p-4 mb-3 bg-white rounded-lg shadow-md border-l-4 cursor-move hover:shadow-lg transition-shadow ${priorityColors[task.priority] || 'bg-gray-100 border-gray-300'}`}
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-gray-800">{task.title}</h4>
        <div className="flex gap-1">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-blue-500 hover:text-blue-700 text-sm"
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700 text-sm"
          >
            Delete
          </button>
        </div>
      </div>
      {isEditing ? (
        <input
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          onBlur={handleUpdate}
          onKeyDown={(e) => e.key === 'Enter' && handleUpdate()}
          className="w-full p-2 border rounded mb-2"
          autoFocus
        />
      ) : (
        <>
          {task.description && (
            <p className="text-sm text-gray-600 mb-2">{task.description}</p>
          )}
          <div className="flex justify-between text-xs text-gray-500">
            <span>Priority: {task.priority}</span>
            <span>{task.dueDate}</span>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskCard;

