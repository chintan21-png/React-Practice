import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitForm(data) {
    console.log(data);
  }
  console.log("Rendering Form component");

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="first">Name: </label>
          <input
            id="first"
            {...register("name", { required: "Name can not be empty" })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            {...register("email", {
              required: "Email can not be empty",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            {...register("password", {
              required: "Password can not be empty",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default Form;
