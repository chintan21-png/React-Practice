import TaskForm from "./components/Form/TaskForm";
import TaskColumn from "./components/Columns/TaskColumns";
import Dashboard from "./Dashboard";
import { TaskProvider, useTaskContext } from "./components/Context/TaskContext";

function Board() {
  const { columns } = useTaskContext();

  return (
    <div className="flex">
      {columns.map((col) => (
        <TaskColumn key={col.id} column={col} />
      ))}
    </div>
  );
}

function App() {
  return (
    <TaskProvider>
      <h1>Kanban Board</h1>
      <Dashboard />
      <TaskForm />
      <Board />
    </TaskProvider>
  );
}

export default App;