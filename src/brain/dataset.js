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

//       })
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };


// const samples = getData();

export const trainData = [
  {input: [30, 41.500000, -100.000000], output: [1,0,0,0,0,0,0,0]}, //NE
  {input: [20, 38.573936, -92.603760], output: [1,0,0,0,0,0,0,0]}, //MO
  {input: [45, 38.500000, -98.000000], output: [0,1,0,0,0,0,0,0]}, //KS
  {input: [60, 39.113000, -105.358887], output: [0,1,0,0,0,0,0,0]}, //CO

  {input: [18, 42.407211, -71.382439], output: [0,0,1,0,0,0,0,0]}, //MA
  {input: [25, 37.926868, -78.024902], output: [0,0,1,0,0,0,0,0]}, //VA
  {input: [40, 45.367584, -68.972168], output: [0,0,0,1,0,0,0,0]}, //ME
  {input: [70, 44.000000, -71.500000], output: [0,0,0,1,0,0,0,0]}, //NH

  {input: [32, 36.778259, -119.417931], output: [0,0,0,0,1,0,0,0]}, //CA
  {input: [55, 44.000000, -120.500000], output: [0,0,0,0,0,1,0,0]}, //OR
  {input: [26, 47.751076, -120.740135], output: [0,0,0,0,1,0,0,0]}, //WA
  {input: [67, 39.419220, -111.950684], output: [0,0,0,0,0,1,0,0]}, //UT

  {input: [28, 34.307144, -106.018066], output: [0,0,0,0,0,0,1,0]}, //NM
  {input: [48, 31.000000, -100.000000], output: [0,0,0,0,0,0,0,1]}, //TX
  {input: [19, 33.247875, -83.441162], output: [0,0,0,0,0,0,1,0]}, //GA
  {input: [73, 34.799999, -92.199997], output: [0,0,0,0,0,0,0,1]}, //AR


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