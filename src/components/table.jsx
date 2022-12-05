// import React, { useState } from "react";
// function MyTable() {
//   const initState = [
//     { id: 1, name: "bread", quantitiy: 50, location: "cupboard" },
//     { id: 2, name: "milk", quantitiy: 20, location: "fridge" },
//     { id: 3, name: "water", quantitiy: 10, location: "fridge" },
//   ];
//   const [state, setState] = useState(initState);

//   return (
//     <table>
//       <tr key={"header"}>
//         {Object.keys(state[0]).map((key) => {
//           return <th>{key}</th>;
//         })}
//       </tr>
//       {state.map((item) => {
//         console.log("Step 1", item);
//         const x = Object.values(item);
//         console.log("Step 2", x);
//         return (
//           <tr key={item.id}>
//             {x.map((val) => {
//               console.log("val", val);
//               return <td>{val}</td>;
//             })}
//           </tr>
//         );
//       })}
//     </table>
//   );
// }

// export default MyTable;
