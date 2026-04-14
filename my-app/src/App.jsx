// // // import React from "react";
// // // // import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // // import Contact from "./pages/contact";
// // // // import Home from "./pages/Home";
// // // // import Menu from "./pages/Menu";
// // // // import Navbar from "./Navbar";
// // // import Card from "./component/Card";
// // // // import Travel from "./assets/Travel.jpg";
// // // // import project2 from "./assets/project2.png";
// // // // import project3 from "./assets/project3.png";
// // // import Tv1 from "./assets/Tv1.jpg";
// // // import Tv2 from "./assets/Tv2.jpg";
// // // import Tv3 from "./assets/Tv3.jpg";
// // // import Tv4 from "./assets/Tv4.jpg";
// // // import Tv5 from "./assets/Tv5.jpg";

// // // // function App() {
// // // //   //Display name
// // // //   // return(
// // // //   //   <div>
// // // //   //     <h1>Hello world</h1>
// // // //   //   </div>
// // // //   // );

// // // //   //Display name using variable
// // // //   // const name = "Hello world";
// // // //   // return (
// // // //   //   <div>
// // // //   //     <h1>{name}</h1>
// // // //   //   </div>
// // // //   // );

// // // //   //Display number using variable
// // // //     // const count = 0;

// // // //     // return(
// // // //     //   <div>
// // // //     //     <h1>{count}</h1>
// // // //     //   </div>
// // // //     // )

// // // //     //Display the number using variable
// // // //     // const price = 2000;
// // // //     // const gst = price * 1.8;

// // // //     // return(
// // // //     //   <div>
// // // //     //     <h1>
// // // //     //       "Total Price is : {price + gst}"
// // // //     //     </h1>
// // // //     //   </div>
// // // //     // )

// // // //     //Display Hello world using props

// // // //   }

// // // // function App(props) {
// // // //   return(
// // // //     <div>
// // // //       <h1>"My name is {props.name}"</h1>
// // // //       <h1>"My age is {props.age}"</h1>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default function App() {
// // // //   return(
// // // //     <div>
// // // //       <h1 style={{backgroundColor:"blue",color:"white", textAlign:"center"}}>Hello world!</h1>
// // // //     </div>
// // // //   )
// // // // }

// // // // function App() {
// // // //   return (
// // // //     <div className="card">
// // // //       <img
// // // //         height="200px"
// // // //         width="300px"
// // // //         src="https://images.unsplash.com/photo-1615829253947-faef9cf73097?ixlib=rb
// // // // 4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit
// // // // =crop&w=1170&q=80"
// // // //       ></img>

// // // //       <p className="para">Nature</p>
// // // //     </div>
// // // //   );
// // // // }
// // // // function App () {
// // // //   return (
// // // //     <div className="App">
// // // //       <Router>
// // // //         <Navbar />
// // // //         <Routes>
// // // //           <Route path="/" element={<Home />}/>
// // // //           <Route path="/menu" element={<Menu />}/>
// // // //           <Route path="/contact" element={<Contact />}/>
// // // //           <Route path="*" element={<h1> Page not Found</h1>}/>
// // // //         </Routes>
// // // //       </Router>
// // // //     </div>
// // // //   )
// // // // }
// // // // function App() {
// // // //   return (
// // // //     <div>

// // // //       <h1 style={{ color: "black", textAlign: "center" }}>
// // // //         Departments
// // // //       </h1>

// // // //       <div style={{
// // // //         display: "flex",
// // // //         justifyContent: "center",
// // // //         gap: "20px",
// // // //         flexWrap: "wrap"
// // // //       }}>

// // // //         <Card
// // // //           title="Computer Engineering"
// // // //           description="Computer Engineering is a four year undergraduate programme introducing its students to realms of computer including theory and design of data storage, software and operating systems."
// // // //         />

// // // //         <Card
// // // //           title="IT Engineering"
// // // //           description="Information Technology is an undergraduate engineering course which focuses on expanding and growing in terms of knowledge within and outside curriculum."
// // // //         />

// // // //         <Card
// // // //           title="Computer Science"
// // // //           description="Computer Engineering with ML & AI specialization programme that presents a solid foundation on principles and technologies."
// // // //         />

// // // //       </div>

// // // //     </div>
// // // //   );
// // // // }
// // // function App() {
// // //   return (
// // //     <div>
// // //       {/* <h1 style={{ color: "black", textAlign: "center" }}>Image Gallery</h1> */}

// // //       <div
// // //         style={{
// // //           display: "grid",
// // //           grid: "1fr 1fr 1fr",
// // //           gridTemplateColumns: "repeat(4, 1fr)",
// // //           justifyContent: "center",
// // //           gap: "0px",
// // //           flexWrap: "wrap",
// // //         }}
// // //       >
// // //         <Card 
// // //           image={Tv1}
// // //           description="Television is a telecommunication medium for transmitting moving images and sound, serving as a mass medium for advertising, entertainment, news, and sports."
// // //           discountedprice= "39,999"
// // //           displayprice="34,999*"
// // //           originalPrice="59,999"
// // //         />

// // //         <Card 
// // //           image={Tv2}
// // //           description="The first working television system was demonstrated by John Logie Baird in 1926, and color television was introduced in 1928. Over time, technology has evolved, leading to the development of various types of televisions, including flat-screen and smart TVs."
// // //           discountedprice="72,990"
// // //           displayprice="72,499*"
// // //           originalPrice="75,000"
// // //         />

// // //         <Card 
// // //           image={Tv3}
// // //           description="Television has significantly influenced society by providing entertainment, education, and information. It has become a powerful medium for shaping public opinion and cultural trends."
// // //           discountedprice="40,999"
// // //           displayprice="38,499*"
// // //           originalPrice="45,000"
// // //         />

// // //         <Card 
// // //           image={Tv4}
// // //           description="Modern televisions come in various types, including LED, OLED, and smart TVs, which offer features like internet connectivity and streaming services."
// // //           discountedprice="77,990"
// // //           displayprice="75,490*"
// // //           originalPrice="89,000"
// // //         />

// // //         <Card 
// // //           image={Tv5}
// // //           description="Television has a vast global reach, allowing viewers to access a wide range of content, from local news to international programming, making it a crucial part of modern communication."
// // //           discountedprice="1,44,999"
// // //           displayprice="1,37,499*"
// // //           originalPrice="1,50,000"
// // //         />
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default App;

// function Item({name, isPacked}) {
//     if(isPacked) {
//       return <li className="item">{name} ✅</li>
//     }
//     return <li className="item">{name}</li>
// }

// export default function PackingList() {
//   return(
//     <section>
//       <h1>Sally Ride's Packing List</h1>

//       <ul>
//         <Item 
//           isPacked={true}
//           name="Space Suit."
//         />

//         <Item 
//           isPacked={false}
//           name = "Sweater"
//         />

//         <Item 
//           isPacked={true}
//           name="Shirt"
//         />

//         <Item 
//           isPacked={true}
//           name="Shoes"
//         />

//         <Item 
//           isPacked={false}
//           name="Shorts"

//         />
//       </ul>
//     </section>
//   )
// }

// function Item({ name, isPacked }) {
//   if (isPacked) {
//     return <li className="item">{name} ✅</li>;
//   }
//   return <li className="item">{name}</li>;
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item
//           isPacked={true}
//           name="Space suit"
//         />
//         <Item
//           isPacked={true}
//           name="Helmet with a golden leaf"
//         />
//         <Item
//           isPacked={false}
//           name="Photo of Tam"
//         />
//       </ul>
//     </section>
//   );
// }

// function Item ({name, isPacked}) {
//   return(
//   <li className="item">
//     {isPacked ? name + '✅' : name}
//   </li>
//   )
// }

// export default function PackingList() {
//   return(
//     <section>
//       <h1>Sally Ride's Packing List</h1>

//       <ul>
//         <Item 
//           isPacked={true}
//           name="Space Suit."
//         />

//         <Item 
//           isPacked={false}
//           name = "Sweater"
//         />

//         <Item 
//           isPacked={true}
//           name="Shirt"
//         />

//         <Item 
//           isPacked={true}
//           name="Shoes"
//         />

//         <Item 
//           isPacked={false}
//           name="Shorts"

//         />
//       </ul>
//     </section>
//   )
// }