import { Trash2, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import TaskCard from "../Cards/TaskCard";

const colAccent = {
  todo: {
    bar: "bg-violet-500",
    count: "bg-violet-100 text-violet-600",
    header: "border-t-violet-500",
  },
  inProgress: {
    bar: "bg-blue-500",
    count: "bg-blue-100 text-blue-600",
    header: "border-t-blue-500",
  },
  review: {
    bar: "bg-amber-400",
    count: "bg-amber-100 text-amber-600",
    header: "border-t-amber-400",
  },
  done: {
    bar: "bg-emerald-500",
    count: "bg-emerald-100 text-emerald-600",
    header: "border-t-emerald-500",
  },
};

const fallback = {
  bar: "bg-indigo-500",
  count: "bg-indigo-100 text-indigo-600",
  header: "border-t-indigo-500",
};

function Column({
  id,
  column,
  onDeleteTask,
  onEditTask,
  onDeleteColumn,
  dragItem,
  dragColumn,
  onDropTask,
}) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const accent = colAccent[id] || fallback;

  return (
    <div
      onDrop={() => {
        onDropTask(id);
        setIsDragOver(false);
      }}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragOver(true);
      }}
      onDragLeave={() => setIsDragOver(false)}
      className={[
        "relative flex flex-col w-64 shrink-0 rounded-xl border border-slate-200 bg-slate-50 transition-all duration-200",
        `border-t-4 ${accent.header}`,
        isDragOver ? "ring-2 ring-indigo-300 bg-indigo-50/50 scale-[1.01]" : "",
      ].join(" ")}
    >
      <div className="flex items-center justify-between px-4 pt-4 pb-3">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${accent.bar}`} />
          <h3 className="text-sm font-semibold text-slate-700 tracking-tight">
            {column.name}
          </h3>
          <span
            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${accent.count}`}
          >
            {column.items.length}
          </span>
        </div>

        <div className="relative">
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="flex items-center justify-center w-7 h-7 rounded-lg text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors"
          >
            <MoreHorizontal size={15} />
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-8 z-20 bg-white border border-slate-200 rounded-xl shadow-lg py-1 w-36">
              <button
                onClick={() => {
                  onDeleteColumn(id);
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors"
              >
                <Trash2 size={13} />
                Delete column
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="h-px bg-slate-200 mx-4" />

      <div className="flex flex-col gap-2.5 p-3 flex-1 min-h-24 overflow-y-auto max-h-[calc(100vh-220px)]">
        {column.items.length === 0 ? (
          <div
            className={[
              "flex flex-col items-center justify-center gap-1.5 h-20 rounded-lg border-2 border-dashed transition-colors",
              isDragOver
                ? "border-indigo-300 bg-indigo-50"
                : "border-slate-200",
            ].join(" ")}
          >
            <span className="text-xs text-slate-400">
              {isDragOver ? "Drop here" : "No tasks"}
            </span>
          </div>
        ) : (
          column.items.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDeleteTask={onDeleteTask}
              columnId={id}
              onEditTask={onEditTask}
              dragItem={dragItem}
              dragContainer={dragColumn}
            />
          ))
        )}
      </div>

      <div className="px-4 py-2.5 border-t border-slate-200">
        <span className="text-xs text-slate-400">
          {column.items.length} {column.items.length === 1 ? "task" : "tasks"}
        </span>
      </div>
    </div>
  );
}

const Columns = ({
  columns,
  onDeleteTask,
  onEditTask,
  onDeleteColumn,
  dragItem,
  dragColumn,
  onDropTask,
}) => {
  return (
    <div className="flex gap-4 px-4 pb-6 overflow-x-auto items-start">
      {Object.entries(columns).map(([id, column]) => (
        <Column
          key={id}
          id={id}
          column={column}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
          onDeleteColumn={onDeleteColumn}
          dragItem={dragItem}
          dragColumn={dragColumn}
          onDropTask={onDropTask}
        />
      ))}
    </div>
  );
};

export default Columns;
