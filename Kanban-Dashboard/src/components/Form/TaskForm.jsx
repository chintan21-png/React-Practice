import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
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

function TaskForm({ onSubmit, initialData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(taskSchema),
    defaultValues: initialData || {
      title: "",
      description: "",
      priority: "",
      dueDate: "",
    },
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  function submitForm(data) {
    onSubmit(data);
  }
  return (
    <form onSubmit={handleSubmit(submitForm)} className="max-w-md mx-auto">
      <div className="relative z-0 w-full mb-5 group">
        <input
          id="title"
          type="text"
          {...register("title")}
          placeholder=" "
          className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
        />
        <label
          htmlFor="title"
          className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Task Title
        </label>
        {errors.title && (
          <p className="text-red-500 text-xs">{errors.title.message}</p>
        )}
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <textarea
          id="description"
          {...register("description")}
          className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
          placeholder=" "
        />
        <label
          htmlFor="description"
          className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Description
        </label>

        {errors.description && (
          <p className="text-red-500 text-xs">{errors.description.message}</p>
        )}
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <select
          id="priority"
          placeholder=" "
          {...register("priority")}
          className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
        >
          <option value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <label
          htmlFor="priority"
          className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Priority
        </label>
        {errors.priority && (
          <p className="text-red-500 text-xs">{errors.priority.message}</p>
        )}
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="date"
          placeholder=" "
          id="duedate"
          {...register("dueDate")}
          className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
        />
        <label
          htmlFor="duedate"
          className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Due Date
        </label>

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
          className="px-3 py-1 bg-blue-600 text-white rounded cursor-pointer hover:scale-105"
        >
          {initialData ? "Update Task" : "Add Task"}
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
