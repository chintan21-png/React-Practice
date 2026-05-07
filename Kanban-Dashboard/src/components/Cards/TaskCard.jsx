import { Trash2, Pencil, GripVertical, CalendarDays, Flag } from "lucide-react";

const priorityConfig = {
  high: {
    label: "High",
    dot: "bg-red-500",
    badge: "bg-red-50 text-red-600 ring-red-200",
    icon: "text-red-500",
  },
  medium: {
    label: "Medium",
    dot: "bg-amber-400",
    badge: "bg-amber-50 text-amber-600 ring-amber-200",
    icon: "text-amber-500",
  },
  low: {
    label: "Low",
    dot: "bg-emerald-500",
    badge: "bg-emerald-50 text-emerald-600 ring-emerald-200",
    icon: "text-emerald-500",
  },
};

const TaskCard = ({
  task,
  onDeleteTask,
  columnId,
  onEditTask,
  dragItem,
  dragContainer,
}) => {
  const priority = priorityConfig[task.priority] || priorityConfig.low;

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
      className="group relative bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-200 cursor-grab active:cursor-grabbing"
    >
      <div className="absolute top-3 right-3 text-slate-300 group-hover:text-slate-400 transition-colors">
        <GripVertical size={14} />
      </div>

      <div
        className={`absolute left-0 top-4 bottom-4 w-1 rounded-full ${priority.dot}`}
      />

      <div className="pl-3">
        <div className="flex items-center gap-1.5 mb-2">
          <span
            className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ring-1 ${priority.badge}`}
          >
            <Flag size={10} className={priority.icon} />
            {priority.label}
          </span>
        </div>

        <h4 className="text-sm font-semibold text-slate-800 leading-snug mb-1 pr-5">
          {task.title}
        </h4>

        {task.description && (
          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3">
            {task.description}
          </p>
        )}

        <div className="flex items-center justify-between mt-3">
          {task.dueDate ? (
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <CalendarDays size={11} />
              <span>{task.dueDate}</span>
            </div>
          ) : (
            <span />
          )}

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onEditTask(task)}
              className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-50 text-indigo-500 hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-150"
              title="Edit task"
            >
              <Pencil size={12} />
            </button>
            <button
              onClick={() => onDeleteTask(columnId, task.id)}
              className="flex items-center justify-center w-7 h-7 rounded-lg bg-red-50 text-red-400 hover:bg-red-100 hover:text-red-600 transition-colors duration-150"
              title="Delete task"
            >
              <Trash2 size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
