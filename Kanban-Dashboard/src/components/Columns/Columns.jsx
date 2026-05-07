import TaskCard from "../Cards/TaskCard";

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
    <div className="flex gap-6 p-6 overflow-x-auto">
      {Object.entries(columns).map(([id, column]) => {
        return (
          <div
            onDrop={() => onDropTask(id)}
            onDragOver={(e) => e.preventDefault()}
            key={id}
            className="p-4 rounded-xl w-64 min-h-75 shadow-sm flex flex-col gap-4"
          >
            <h3 className="text-lg font-semibold mb-4 text-center">
              {column.name}
            </h3>

            {column.items.length === 0 ? (
              <p className="text-gray-500 text-sm text-center">
                No Matching tasks
              </p>
            ) : (
              column.items.map((task) => {
                return (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onDeleteTask={onDeleteTask}
                    columnId={id}
                    onEditTask={onEditTask}
                    dragItem={dragItem}
                    dragContainer={dragColumn}
                  />
                );
              })
            )}
            <button
              onClick={() => onDeleteColumn(id)}
              className="text-white cursor-pointer bg-red-600 bg-danger box-border border border-transparent hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none ml-2 hover:scale-105"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Columns;
