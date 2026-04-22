//i want to log the user input in the console when the form is submitted and also clear the form fields after submission. I also want to add a success message that says "Registration successful!" after the form is submitted successfully.

import React, { useState } from "react";
import { validateEmail } from "../../utils/validateEmail";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!name) {
      setError("Name is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    console.log({ name, email, password });
    alert("Registration successful!");
    setName("");
    setEmail("");
    setPassword("");
  };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 cursor-pointer transition duration-200 hover:bg-gray-200 p-4 rounded-lg">
            <div className="form-card p-8 w-full max-w-md cursor-pointer transition duration-200 hover:shadow-lg hover:shadow-gray-300 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">Name :</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}   
                            required={true}
                            className="form-input w-full"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Email :</label>     
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required={true}
                            className="form-input w-full"
                            placeholder="example@email.com"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Password :</label>
                        <input  
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required={true}
                            className="form-input w-full"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200 cursor-pointer">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;

//what is e.preventDefault() in the handleSubmit function?
//e.preventDefault() is a method that prevents the default action of the form submission, which is to refresh the page. By calling this method, we can handle the form submission in our own way without causing a page reload.

//why e.preventDefault() is added first in the handleSubmit function?
//e.preventDefault() is added first in the handleSubmit function to ensure that the default form submission behavior is prevented before any other logic is executed. This allows us to handle the form submission and validation without the page refreshing, which would otherwise interrupt our custom handling of the form data.

