import { useTaskContext } from "./components/Context/TaskContext";
import { useMemo } from "react";

function Dashboard() {
  const { tasks } = useTaskContext();

  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.status === "done").length;
    const pending = total - completed;

    return { total, completed, pending };
  }, [tasks]);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Tasks: {stats.total}</p>
      <p>Completed: {stats.completed}</p>
      <p>Pending: {stats.pending}</p>
    </div>
  );
}

export default Dashboard;