import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const taskSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Task title must be at least 3 characters")
    .max(50, "Task title too long"),

  description: z
    .string()
    .max(200, "Description too long")
    .optional(),

  priority: z.enum(["low", "medium", "high"], {
    errorMap: () => ({ message: "Please select a priority" }),
  }),

  dueDate: z
    .string()
    .refine((date) => new Date(date) > new Date(), {
      message: "Due date must be in the future",
    }),
});

function TaskForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchema),
  });

  function submitForm(data) {
    localStorage.setItem("Task Data:", data);
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      
      <div>
        <label htmlFor="title">Task Title:</label>
        <input id="title" {...register("title")} />
        {errors.title && <span>{errors.title.message}</span>}
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description "{...register("description")} />
        {errors.description && <span>{errors.description.message}</span>}
      </div>

      <div>
        <label htmlFor="priority">Priority:</label>
        <select id="priority" {...register("priority")}>
          <option value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        {errors.priority && <span>{errors.priority.message}</span>}
      </div>

      <div>
        <label htmlFor="dueDate">Due Date:</label>
        <input id="dueDate" type="date" {...register("dueDate")} />
        {errors.dueDate && <span>{errors.dueDate.message}</span>}
      </div>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;