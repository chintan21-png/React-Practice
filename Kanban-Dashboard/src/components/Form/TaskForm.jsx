import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
//import Modal from "../../Modal";

const taskSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Task title must be at least 3 characters")
    .max(50, "Task title too long"),

  description: z.string().max(200, "Description too long").optional(),

  priority: z.enum(["low", "medium", "high"], {
    errorMap: () => ({ message: "Please select a priority" }),
  }),

  dueDate: z.string().refine((date) => new Date(date) > new Date(), {
    message: "Due date must be in the future",
  }),
});

function TaskForm({ onAddTask }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchema),
  });

  function submitForm(data) {
    onAddTask(data);
  }
  return (
    <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
      <div>
        <label htmlFor="title" className="text-sm font-medium">Task Title</label>
        <input id="title" type="text"
          {...register("title")}
          className="w-full border p-2 rounded mt-1"
        />
        {errors.title && (
          <p className="text-red-500 text-xs">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="description" lassName="text-sm font-medium">Description</label>
        <textarea
          id="description"
          {...register("description")}
          className="w-full border p-2 rounded mt-1"
        />
        {errors.description && (
          <p className="text-red-500 text-xs">{errors.description.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="priority" className="text-sm font-medium">Priority</label>
        <select
          id="priority"
          {...register("priority")}
          className="w-full border p-2 rounded mt-1"
        >
          <option value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        {errors.priority && (
          <p className="text-red-500 text-xs">{errors.priority.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="duedate" className="text-sm font-medium">Due Date</label>
        <input
          type="date"
          id="duedate"
          {...register("dueDate")}
          className="w-full border p-2 rounded mt-1"
        />
        {errors.dueDate && (
          <p className="text-red-500 text-xs">{errors.dueDate.message}</p>
        )}
      </div>

      <div className="flex justify-end gap-3 pt-3">
        {/* <button
          type="button"
          onClick={onClose}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          Cancel
        </button> */}

        <button
          type="submit"
          className="px-3 py-1 bg-blue-600 text-white rounded cursor-pointer hover:scale-105 animate-bounce"
          
        >
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
