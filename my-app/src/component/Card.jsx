// // function Card(props) {
// //   return (
// //     <div
// //       style={{
// //         // border: "2px solid #000001",
// //         // borderRadius: "30px",
// //         width: "300px",
// //         padding: "2px",
// //         textAlign: "center",
// //         margin: "2px",
// //       }}
// //     >
// //       <img
// //         src={props.image}
// //         alt="gallery"
// //         style={{ height: "200px", width: "300px" }}
// //       />

// //       <p
// //         style={{
// //           fontSize: "14px",
// //           display: "-webkit-box",
// //           WebkitLineClamp: 1,
// //           WebkitBoxOrient: "vertical",
// //           overflow: "hidden",
// //         }}
// //       >
// //         {props.description}
// //       </p>

// //       <h6>Just ₹{props.displayprice}</h6>

// //       <span style={{ color: "#e53935", fontWeight: "bold", fontSize: "1.2em" }}>
// //         ₹{props.discountedprice}
// //       </span>
// //       <span
// //         style={{
// //           textDecoration: "line-through",
// //           color: "#888",
// //           marginRight: "8px",
// //         }}
// //       >
// //         ₹{props.originalPrice}
// //       </span>

// //       {/* <button style={{
// //         padding:"6px 12px",
// //         border:"1px solid gray",
// //         background:"white",
// //         cursor:"pointer"
// //       }}>
// //         Explore
// //       </button> */}
// //     </div>
// //   );
// // }

// // export default Card;
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
//           name="Space Suit."
//           isPacked= {true}
//         />

//         <Item 
//           name = "Sweater"
//           isPacked={false}
//         />

//         <Item 
//           name="Shirt"
//           isPacked={true}
//         />

//         <Item 
//           name="Shoes"
//           isPacked={true}
//         />

//         <Item 
//           name="Shorts"
//           isPacked={false}
//         />
//       </ul>
//     </section>
//   )
// }