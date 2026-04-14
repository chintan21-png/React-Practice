// import { useState } from "react";

// function App() {
//   const [num, setNum] = useState(0);

//   function increment() {
//     setNum(num + 1);
//   }

//   function decrement() {
//     if(num <= 0) {
//       return setNum(0);
//     }
//     else {
//       return setNum(num - 1);
//     }
//   }

//   return(
//     <div>
//       <button onClick={increment}>Increment Count</button>
//       <p>My Age is : {num}</p>
//       <button onClick={decrement}>Decrement Count</button>
//     </div>
//   )
// };

// export default App;
import { useState } from "react";
import Tv1 from "./assets/Tv1.jpg";
import Travel from "./assets/Travel.jpg";

function App() {
  const [img, setImage] = useState(Tv1);

  function changeImage() {
    setImage(Travel);
  }

  return (
    <div>
      <img src={img} alt="img1" height="200px" width="300px" />
      <button onClick={changeImage}>Change Image</button>
    </div>
  );
}

export default App;