import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name can not be empty")
    .max(20, "Name can not be more than 20 characters"),
  age: z
    .number()
    .min(18, "Age must be at least 18")
    .max(100, "Age must be less than 100"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(10, "Password can not be more than 10 characters"),
  confirmPassword: z.string(),  
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

function ZodForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  function submitForm(data) {
    console.log(data);
  }
  console.log("Rendering Form component");

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="first">Name: </label>
          <input id="first" {...register("name")} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input
            id="age"
            type="number"
            {...register("age", { valueAsNumber: true })}
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input id="password" type="password" {...register("password")} />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input id="confirmPassword" type="password" {...register("confirmPassword")} />
          {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ZodForm;
