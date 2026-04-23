// import React, { useState } from "react";
// import { validateEmail } from "../../utils/validateEmail";

// function SignUp() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//  // const [isValid, setIsValid] = useState(false);
  
//   function handleSubmit(e) {
//     e.preventDefault();
//     setError("");

//     if (!name.trim()) {
//       setError("Name is required");
//       return;
//     }

//     if (!validateEmail(email)) {
//       setError("Invalid email format");
//       return;
//     }
//     if (password.length < 6) {
//       setError("Password must be at least 6 characters");
//       return;
//     }
//    // setIsValid(true);

//     console.log({ name, email, password });
//     alert("Registration successful!");
//     setName("");
//     setEmail("");
//     setPassword("");
//     // setIsValid(false);
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 cursor-pointer transition duration-200 hover:bg-gray-200 p-4 rounded-lg">
//       <div className="background-gradient form-card p-8 w-full max-w-md cursor-pointer transition duration-200 hover:shadow-lg hover:shadow-gray-300 rounded-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center text-white">
//           Sign Up
//         </h2>
//         {error && <p className="text-red-800 mb-4">{error}</p>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="mt-4">
//             <label for="name" className="block mb-1 font-medium text-white">
//               Name :
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required={true}
//               className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded-md text-white"
//               placeholder="Enter your name"
//             />
//           </div>
//           <div className="mt-4">
//             <label for="email" className="block mb-1 font-medium text-white">
//               Email :
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required={true}
//               className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
//               placeholder="example@email.com"
//             />
//           </div>
//           <div className="mt-4">
//             <label for="password" className="block mb-1 font-medium text-white">
//               Password :
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required={true}
//               className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
//               placeholder="Enter your password"
//             />
//           </div>
//           <div className="justify-center">
//             <button class="bg-cyan-950 text-cyan-400 border border-cyan-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group w-full mt-4">
//               <span class="bg-cyan-400 shadow-cyan-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignUp;

// //what is e.preventDefault() in the handleSubmit function?
// //e.preventDefault() is a method that prevents the default action of the form submission, which is to refresh the page. By calling this method, we can handle the form submission in our own way without causing a page reload.

// //why e.preventDefault() is added first in the handleSubmit function?
// //e.preventDefault() is added first in the handleSubmit function to ensure that the default form submission behavior is prevented before any other logic is executed. This allows us to handle the form submission and validation without the page refreshing, which would otherwise interrupt our custom handling of the form data.

//React From using zod validation library

import { useState } from "react";

function SignUp() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ name, age, password });
    alert("Registration successful!");
    setName("");
    setAge("");
    setPassword("");
  }

  console.log("Rendering SignUp component");

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>

        <div>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)}></input>
        </div>

        <div>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>  
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignUp;
