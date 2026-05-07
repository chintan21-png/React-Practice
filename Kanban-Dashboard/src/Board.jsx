import { useState, useEffect, useRef } from "react";
import { Search, SlidersHorizontal, Plus, Columns3, X } from "lucide-react";
import TaskForm from "./components/Form/TaskForm";
import Columns from "./components/Columns/Columns";
import Modal from "./Modal";

const STORAGE_KEY = "kanban-data";

const PRIORITY_OPTIONS = [
  { value: "", label: "All priorities" },
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];

const Board = () => {
  const dragItem = useRef();
  const dragColumn = useRef();

  const [editingTask, setEditingTask] = useState(null);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filterPriority, setFilterPriority] = useState("");
  const [newColumnName, setNewColumnName] = useState("");
  const [showColInput, setShowColInput] = useState(false);

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

  const totalTasks = Object.values(columns).reduce(
    (a, c) => a + c.items.length,
    0,
  );
  const doneTasks = columns.done?.items.length ?? 0;

  const filteredColumns = Object.fromEntries(
    Object.entries(columns)
      .map(([colId, col]) => ({
        [colId]: {
          ...col,
          items: col.items.filter((task) => {
            const ms =
              task.title.toLowerCase().includes(search.toLowerCase()) ||
              task.description?.toLowerCase().includes(search.toLowerCase());
            const mp = filterPriority ? task.priority === filterPriority : true;
            return ms && mp;
          }),
        },
      }))
      .map(Object.entries)
      .flat(1),
  );

  const addTask = (taskData) => {
    const newTask = { id: Date.now().toString(), ...taskData };
    setColumns((prev) => ({
      ...prev,
      todo: { ...prev.todo, items: [...prev.todo.items, newTask] },
    }));
  };

  const updateTask = (updatedTask) => {
    setColumns((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((cid) => {
        next[cid] = {
          ...next[cid],
          items: next[cid].items.map((t) =>
            t.id === updatedTask.id ? updatedTask : t,
          ),
        };
      });
      return next;
    });
  };

  const deleteTask = (columnId, taskId) =>
    setColumns((prev) => ({
      ...prev,
      [columnId]: {
        ...prev[columnId],
        items: prev[columnId].items.filter((t) => t.id !== taskId),
      },
    }));

  const addColumn = () => {
    if (!newColumnName.trim()) return;
    const newId =
      newColumnName.toLowerCase().replace(/\s+/g, "-") + "-" + Date.now();
    setColumns((prev) => ({
      ...prev,
      [newId]: { name: newColumnName, items: [] },
    }));
    setNewColumnName("");
    setShowColInput(false);
  };

  const deleteColumn = (columnId) =>
    setColumns((prev) => {
      const n = { ...prev };
      delete n[columnId];
      return n;
    });

  const handleDrop = (toColumnId) => {
    const task = dragItem.current;
    const fromColId = dragColumn.current;
    if (!task || !fromColId || fromColId === toColumnId) return;
    setColumns((prev) => ({
      ...prev,
      [fromColId]: {
        ...prev[fromColId],
        items: prev[fromColId].items.filter((t) => t.id !== task.id),
      },
      [toColumnId]: {
        ...prev[toColumnId],
        items: [...prev[toColumnId].items, task],
      },
    }));
  };

  const closeModal = () => {
    setIsTaskModalOpen(false);
    setEditingTask(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <div className="sticky top-0 z-30 bg-slate-900/80 backdrop-blur border-b border-white/10 px-6 py-3">
        <div className="flex items-center gap-3 flex-wrap">
          {/* Search */}
          <div className="relative">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <input
              type="text"
              value={search}
              placeholder="Search tasks…"
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 pr-3 py-2 text-sm bg-white/5 border border-white/10 text-slate-200 placeholder-slate-500 rounded-lg w-52 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
              >
                <X size={12} />
              </button>
            )}
          </div>

          <div className="relative flex items-center">
            <SlidersHorizontal
              size={13}
              className="absolute left-3 text-slate-400 pointer-events-none"
            />
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="pl-8 pr-3 py-2 text-sm bg-white/5 border border-white/10 text-slate-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer transition-all"
            >
              {PRIORITY_OPTIONS.map((o) => (
                <option key={o.value} value={o.value} className="bg-slate-800">
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          {filterPriority && (
            <span className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              {filterPriority}
              <button
                onClick={() => setFilterPriority("")}
                className="hover:text-white"
              >
                <X size={10} />
              </button>
            </span>
          )}

          <div className="flex-1" />

          <div className="hidden sm:flex items-center gap-3 text-xs text-slate-400 mr-2">
            <span>
              <span className="text-slate-200 font-semibold">{totalTasks}</span>{" "}
              tasks
            </span>
            <span className="w-px h-3 bg-slate-600" />
            <span>
              <span className="text-emerald-400 font-semibold">
                {doneTasks}
              </span>{" "}
              done
            </span>
          </div>

          <button
            onClick={() => setIsTaskModalOpen(true)}
            className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-150 shadow-md shadow-indigo-900/40"
          >
            <Plus size={15} />
            Add task
          </button>

          <button
            onClick={() => setShowColInput((v) => !v)}
            className={[
              "flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg border transition-all duration-150",
              showColInput
                ? "bg-white/10 border-white/20 text-white"
                : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white",
            ].join(" ")}
          >
            <Columns3 size={15} />
            {showColInput ? "Cancel" : "Add column"}
          </button>

          {showColInput && (
            <div className="flex items-center gap-2">
              <input
                autoFocus
                type="text"
                placeholder="Column name…"
                value={newColumnName}
                onChange={(e) => setNewColumnName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addColumn()}
                className="px-3 py-2 text-sm bg-white/5 border border-white/10 text-slate-200 placeholder-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 w-40 transition-all"
              />
              <button
                onClick={addColumn}
                className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white text-sm font-medium px-3 py-2 rounded-lg transition-all"
              >
                <Plus size={14} /> Add
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="p-6">
        <Columns
          columns={filteredColumns}
          onDeleteTask={deleteTask}
          onDeleteColumn={deleteColumn}
          dragItem={dragItem}
          dragColumn={dragColumn}
          onDropTask={handleDrop}
          onEditTask={(task) => {
            setEditingTask(task);
            setIsTaskModalOpen(true);
          }}
        />
      </div>

      <Modal
        isOpen={isTaskModalOpen}
        onClose={closeModal}
        title={editingTask ? "Edit Task" : "Add Task"}
      >
        <TaskForm
          initialData={editingTask}
          onSubmit={(data) => {
            editingTask
              ? updateTask({ ...editingTask, ...data })
              : addTask(data);
            closeModal();
          }}
        />
      </Modal>
    </div>
  );
};

export default Board;
