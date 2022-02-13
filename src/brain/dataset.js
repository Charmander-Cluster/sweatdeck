// import { collection, getDocs, updateDoc , doc} from "firebase/firestore";
// import db from "../firebase.js";
// import { latCalc, longCalc} from './dataMods'
// import {reco} from './index'

// export const changeData = () => {
//   return async () => {
//     try {
      // const userData = await getDocs(collection(db, "users"))
      // userData.docs.map((elem) => {
      //   let data = elem.data()
      //   let elemState = data.state
      //   let longitude = longCalc(elemState);
      //   updateDoc(doc(db, "users", elem.id), {long: longitude})

      // const userData = await getDocs(collection(db, "users"))
      // userData.docs.map((elem) => {
      //   let data = elem.data()
      //   let year = data.birthday.slice(data.birthday.length - 4)
      //   let latitude = data.lat
      //   let longitude = data.long
      //   let groupRec = reco([year, latitude, longitude])
      //   let finalGroupRec = groupRec.indexOf(Math.max(...groupRec))
      //   updateDoc(doc(db, "users", elem.id), {group: finalGroupRec})

      // const userData = await getDocs(collection(db, "users"));
      // userData.docs.map((elem) => {
      //   let data = elem.data();
      //   let elemState = data.state;
      //   let longitude = stateNumCalc(elemState);
      //   updateDoc(doc(db, "users", elem.id), { stateNum: longitude });
      // });

//       })
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };


// const samples = getData();

export const trainData = [
  //cold states
{input: [22, 1], output: [1,0,0,0]}, //NE
{input: [19, 2], output: [1,0,0,0]}, //MO
{input: [30, 3], output: [1,0,0,0]}, //KS
{input: [28, 4], output: [1,0,0,0]}, //CO
{input: [33, 5], output: [1,0,0,0]}, //MA
{input: [15, 6], output: [1,0,0,0]}, //NE
{input: [20, 7], output: [1,0,0,0]}, //MO
{input: [25, 8], output: [1,0,0,0]}, //KS
{input: [30, 9], output: [1,0,0,0]}, //CO
{input: [31, 20], output: [1,0,0,0]}, //MA
{input: [12, 10], output: [1,0,0,0]}, //ME
{input: [20, 11], output: [1,0,0,0]}, //NH
{input: [21, 12], output: [1,0,0,0]}, //WA
{input: [18, 15], output: [1,0,0,0]}, //UT
{input: [16, 18], output: [1,0,0,0]}, //MI
{input: [22, 20], output: [1,0,0,0]}, //NE
{input: [19, 10], output: [1,0,0,0]}, //MO
{input: [30, 12], output: [1,0,0,0]}, //KS
{input: [28, 25], output: [1,0,0,0]}, //CO
{input: [33, 26], output: [1,0,0,0]}, //MA
{input: [15, 26], output: [1,0,0,0]}, //NE
{input: [20, 27], output: [1,0,0,0]}, //MO
{input: [25, 28], output: [1,0,0,0]}, //KS
{input: [30, 19], output: [1,0,0,0]}, //CO
{input: [31, 18], output: [1,0,0,0]}, //MA
{input: [12, 31], output: [1,0,0,0]}, //ME
{input: [20, 11], output: [1,0,0,0]}, //NH
{input: [21, 15], output: [1,0,0,0]}, //WA
{input: [18, 25], output: [1,0,0,0]}, //UT
{input: [16, 26], output: [1,0,0,0]}, //MI

{input: [55, 10], output: [0,1,0,0]}, //ME
{input: [60, 9], output: [0,1,0,0]}, //NH
{input: [78, 8], output: [0,1,0,0]}, //WA
{input: [49, 7], output: [0,1,0,0]}, //UT
{input: [65, 3], output: [0,1,0,0]}, //MI
{input: [70, 12], output: [0,1,0,0]}, //MO
{input: [80, 20], output: [0,1,0,0]}, //KS
{input: [90, 15], output: [0,1,0,0]}, //CO
{input: [85, 17], output: [0,1,0,0]}, //MA
{input: [75, 18], output: [0,1,0,0]}, //NE
{input: [65, 16], output: [0,1,0,0]}, //MO
{input: [59, 20], output: [0,1,0,0]}, //KS
{input: [55, 3], output: [0,1,0,0]}, //CO
{input: [63, 21], output: [0,1,0,0]}, //MA
{input: [71, 19], output: [0,1,0,0]}, //ME
{input: [55, 25], output: [0,1,0,0]}, //ME
{input: [60, 29], output: [0,1,0,0]}, //NH
{input: [78, 18], output: [0,1,0,0]}, //WA
{input: [49, 17], output: [0,1,0,0]}, //UT
{input: [65, 23], output: [0,1,0,0]}, //MI
{input: [70, 21], output: [0,1,0,0]}, //MO
{input: [80, 18], output: [0,1,0,0]}, //KS
{input: [90, 31], output: [0,1,0,0]}, //CO
{input: [85, 13], output: [0,1,0,0]}, //MA
{input: [75, 15], output: [0,1,0,0]}, //NE
{input: [65, 28], output: [0,1,0,0]}, //MO
{input: [59, 19], output: [0,1,0,0]}, //KS
{input: [55, 15], output: [0,1,0,0]}, //CO
{input: [63, 28], output: [0,1,0,0]}, //MA
{input: [71, 26], output: [0,1,0,0]}, //ME


//warm states
{input: [21, 40], output: [0,0,1,0]}, //CA
{input: [30, 45], output: [0,0,1,0]}, //AL
{input: [38, 50], output: [0,0,1,0]}, //NM
{input: [19, 37], output: [0,0,1,0]}, //TX
{input: [25, 45], output: [0,0,1,0]}, //GA
{input: [20, 46], output: [0,0,1,0]}, //CA
{input: [29, 49], output: [0,0,1,0]}, //AL
{input: [15, 38], output: [0,0,1,0]}, //NM
{input: [20, 39], output: [0,0,1,0]}, //TX
{input: [16, 45], output: [0,0,1,0]}, //GA
{input: [30, 40], output: [0,0,1,0]}, //AR
{input: [28, 41], output: [0,0,1,0]}, //MS
{input: [29, 42], output: [0,0,1,0]}, //FL
{input: [25, 43], output: [0,0,1,0]}, //LA
{input: [26, 45], output: [0,0,1,0]}, //SC
{input: [21, 40], output: [0,0,1,0]}, //CA
{input: [30, 44], output: [0,0,1,0]}, //AL
{input: [38, 37], output: [0,0,1,0]}, //NM
{input: [19, 50], output: [0,0,1,0]}, //TX
{input: [25, 47], output: [0,0,1,0]}, //GA
{input: [20, 39], output: [0,0,1,0]}, //CA
{input: [29, 38], output: [0,0,1,0]}, //AL
{input: [15, 37], output: [0,0,1,0]}, //NM
{input: [20, 40], output: [0,0,1,0]}, //TX
{input: [16, 36], output: [0,0,1,0]}, //GA
{input: [30, 37], output: [0,0,1,0]}, //AR
{input: [28, 40], output: [0,0,1,0]}, //MS
{input: [29, 38], output: [0,0,1,0]}, //FL
{input: [25, 39], output: [0,0,1,0]}, //LA
{input: [26, 38], output: [0,0,1,0]}, //SC


{input: [73, 39], output: [0,0,0,1]}, //AR
{input: [66, 38], output: [0,0,0,1]}, //MS
{input: [59, 49], output: [0,0,0,1]}, //FL
{input: [48, 48], output: [0,0,0,1]}, //LA
{input: [80, 50], output: [0,0,0,1]}, //SC
{input: [88, 50], output: [0,0,0,1]}, //CA
{input: [99, 46], output: [0,0,0,1]}, //AL
{input: [77, 48], output: [0,0,0,1]}, //NM
{input: [85, 38], output: [0,0,0,1]}, //TX
{input: [65, 39], output: [0,0,0,1]}, //GA
{input: [59, 36], output: [0,0,0,1]}, //AR
{input: [60, 40], output: [0,0,0,1]}, //MS
{input: [50, 45], output: [0,0,0,1]}, //FL
{input: [59, 36], output: [0,0,0,1]}, //LA
{input: [60, 37], output: [0,0,0,1]}, //SC
{input: [73, 37], output: [0,0,0,1]}, //AR
{input: [66, 38], output: [0,0,0,1]}, //MS
{input: [59, 35], output: [0,0,0,1]}, //FL
{input: [48, 36], output: [0,0,0,1]}, //LA
{input: [80, 39], output: [0,0,0,1]}, //SC
{input: [88, 38], output: [0,0,0,1]}, //CA
{input: [99, 37], output: [0,0,0,1]}, //AL
{input: [77, 40], output: [0,0,0,1]}, //NM
{input: [85, 41], output: [0,0,0,1]}, //TX
{input: [65, 42], output: [0,0,0,1]}, //GA
{input: [59, 43], output: [0,0,0,1]}, //AR
{input: [60, 40], output: [0,0,0,1]}, //MS
{input: [50, 38], output: [0,0,0,1]}, //FL
{input: [59, 36], output: [0,0,0,1]}, //LA
{input: [60, 37], output: [0,0,0,1]}, //SC

  // {input: [30, 41.500000, -100.000000], output: [1,0,0,0,0,0,0,0]}, //NE
  // {input: [20, 38.573936, -92.603760], output: [1,0,0,0,0,0,0,0]}, //MO
  // {input: [45, 38.500000, -98.000000], output: [0,1,0,0,0,0,0,0]}, //KS
  // {input: [60, 39.113000, -105.358887], output: [0,1,0,0,0,0,0,0]}, //CO

  // {input: [18, 42.407211, -71.382439], output: [0,0,1,0,0,0,0,0]}, //MA
  // {input: [25, 37.926868, -78.024902], output: [0,0,1,0,0,0,0,0]}, //VA
  // {input: [40, 45.367584, -68.972168], output: [0,0,0,1,0,0,0,0]}, //ME
  // {input: [70, 44.000000, -71.500000], output: [0,0,0,1,0,0,0,0]}, //NH

  // {input: [32, 36.778259, -119.417931], output: [0,0,0,0,1,0,0,0]}, //CA
  // {input: [55, 44.000000, -120.500000], output: [0,0,0,0,0,1,0,0]}, //OR
  // {input: [26, 47.751076, -120.740135], output: [0,0,0,0,1,0,0,0]}, //WA
  // {input: [67, 39.419220, -111.950684], output: [0,0,0,0,0,1,0,0]}, //UT

  // {input: [28, 34.307144, -106.018066], output: [0,0,0,0,0,0,1,0]}, //NM
  // {input: [48, 31.000000, -100.000000], output: [0,0,0,0,0,0,0,1]}, //TX
  // {input: [19, 33.247875, -83.441162], output: [0,0,0,0,0,0,1,0]}, //GA
  // {input: [73, 34.799999, -92.199997], output: [0,0,0,0,0,0,0,1]}, //AR


  // {input: [1996, 41.500000, -100.000000], output: [1,0,0,0,0,0,0,0]}, //NE
  // {input: [2002, 38.573936, -92.603760], output: [1,0,0,0,0,0,0,0]}, //MO
  // {input: [1975, 38.500000, -98.000000], output: [0,1,0,0,0,0,0,0]}, //KS
  // {input: [1950, 39.113000, -105.358887], output: [0,1,0,0,0,0,0,0]}, //CO

  // {input: [2004, 42.407211, -71.382439], output: [0,0,1,0,0,0,0,0]}, //MA
  // {input: [1990, 37.926868, -78.024902], output: [0,0,1,0,0,0,0,0]}, //VA
  // {input: [1970, 45.367584, -68.972168], output: [0,0,0,1,0,0,0,0]}, //ME
  // {input: [1955, 44.000000, -71.500000], output: [0,0,0,1,0,0,0,0]}, //NH

  // {input: [1988, 36.778259, -119.417931], output: [0,0,0,0,1,0,0,0]}, //CA
  // {input: [1942, 44.000000, -120.500000], output: [0,0,0,0,0,1,0,0]}, //OR
  // {input: [1975, 47.751076, -120.740135], output: [0,0,0,0,1,0,0,0]}, //WA
  // {input: [1963, 39.419220, -111.950684], output: [0,0,0,0,0,1,0,0]}, //UT

  // {input: [1990, 34.307144, -106.018066], output: [0,0,0,0,0,0,1,0]}, //NM
  // {input: [1968, 31.000000, -100.000000], output: [0,0,0,0,0,0,0,1]}, //TX
  // {input: [2003, 33.247875, -83.441162], output: [0,0,0,0,0,0,1,0]}, //GA
  // {input: [1959, 34.799999, -92.199997], output: [0,0,0,0,0,0,0,1]}, //AR
]

