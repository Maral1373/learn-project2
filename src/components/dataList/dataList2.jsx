// import { Outlet, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import "./styleData.css";

// const DataList = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState({});

//   const fetchData = () => {
//     const dataFromBackend = [
//       { user: "maral", score: 1 },
//       { user: "maral", score: 15 },
//       { user: "ata", score: 3 },
//       { user: "ata", score: 7 },
//       { user: "omid", score: 5 },
//       { user: "omid", score: 105 },
//       { user: "maral", score: 1 },
//     ];

//     const scores = {};

//     dataFromBackend.forEach((i) => {
//       if (scores[i.user]) {
//         scores[i.user] = [...scores[i.user], i.score];
//       } else {
//         scores[i.user] = [i.score];
//       }
//     });

//     /**
//      scores = {
//       maral: [1, 15, 1]
//      }
//      */

//     setData(scores);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const users = Object.keys(data);

//   const prepareTable = () => {
//     const numOfGames = (data[users[0]] || []).length;

//     const tb = [];

//     for (let game = 0; game < numOfGames; game++) {
//       let satr = [];
//       for (let user = 0; user < users.length; user++) {
//         satr.push(<td>{data[users[user]][game]}</td>);
//       }
//       tb.push(<tr>{satr}</tr>);
//     }
//     return tb;
//   };

//   prepareTable();
//   return (
//     <div className="container">
//       <header className="header">
//         <nav>
//           <h1 className="title">DataList page</h1>
//           <div className="container-btn">
//             <button
//               className="btn"
//               onClick={() => {
//                 navigate("/");
//               }}
//             >
//               Home
//             </button>
//             <button
//               className="btn"
//               onClick={() => {
//                 navigate("/score");
//               }}
//             >
//               Score
//             </button>
//             <button
//               className="btn"
//               onClick={() => {
//                 navigate("/user");
//               }}
//             >
//               User
//             </button>
//             <button
//               className="btn"
//               onClick={() => {
//                 navigate("/dataList");
//               }}
//             >
//               Data List
//             </button>
//           </div>
//         </nav>
//       </header>

//       <br />
//       <div>
//         <table>
//           <tr>
//             {users.map((m) => (
//               <td>{m}</td>
//             ))}
//           </tr>
//           {prepareTable()}
//         </table>
//       </div>

//       <Outlet />
//       <div></div>
//     </div>
//   );
// };

// export default DataList;
