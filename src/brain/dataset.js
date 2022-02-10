// import { collection, getDocs, doc } from "firebase/firestore";
// import db from "../firebase.js";

// let getData = () => {
//   return async () => {
//     try {
//       const userData = await getDocs(collection(db, "users"));
//       let users = userData.docs.map((elem) => {
//           return {elemData: elem.data() }
//       })

//       let arr = [];
//       userData.docs.map((elem) => {
//           arr.push([elem.data().birthday, elem.data().state])
//       })

//       return arr;
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

// const samples = getData();

const trainData = [
  {input: [25, 41.5, -100], output: [1,0,0,0,0,0,0,0]}, //NE
  {input: [20, 38.573936, -92.603760], output: [1,0,0,0,0,0,0,0]}, //MO
  {input: [45, 38.5, -98], output: [0,1,0,0,0,0,0,0]}, //KS
  {input: [65, 39.113, -105.358887], output: [0,1,0,0,0,0,0,0]}, //CO


  {input: [23, 42.407211, -71.382439], output: [0,0,1,0,0,0,0,0]}, //MA
  {input: [31, 37.926868, -78.024902], output: [0,0,1,0,0,0,0,0]}, //VA
  {input: [37, 41.203323, -77.194527], output: [0,0,1,0,0,0,0,0]}, //PA
  {input: [42, 45.367584, -68.972168], output: [0,0,0,1,0,0,0,0]}, //ME
  {input: [70, 44, -71.5], output: [0,0,0,1,0,0,0,0]}, //NH

  {input: [35, 36.778259, -119.417931], output: [0,0,0,0,1,0,0,0]}, //CA
  {input: [79, 44, -120.5], output: [0,0,0,0,0,1,0,0]}, //OR
  {input: [40, 47.751076, -120.740135], output: [0,0,0,0,1,0,0,0]}, //WA
  {input: [60, 39.419220, -111.950684], output: [0,0,0,0,0,1,0,0]}, //UT

  {input: [32, 34.307144, -106.018066], output: [0,0,0,0,0,0,1,0]}, //NM
  {input: [50, 31, -100], output: [0,0,0,0,0,0,0,1]}, //TX
  {input: [19, 33.247875, -83.441162], output: [0,0,0,0,0,0,1,0]}, //GA
  {input: [61, 34.799999, -92.199997], output: [0,0,0,0,0,0,0,1]}, //AR
]

exports.DATA = trainData