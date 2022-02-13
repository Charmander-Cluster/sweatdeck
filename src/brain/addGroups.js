import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import db from "../firebase.js";
import { stateNumCalc, ageCalc, latCalc, longCalc } from "./dataMods";
import { reco } from "./index";

export const changeData = () => {
  return async () => {
    try {
      const userData = await getDocs(collection(db, "users"))
      userData.docs.map((elem) => {
        let data = elem.data()
        let age = ageCalc(data.birthday)
        let stateNum = data.stateNum
        let groupRec = reco([age, stateNum])
        let finalGroupRec = groupRec.indexOf(Math.max(...groupRec))
        console.log('age: ', age, 'stateNum: ', stateNum, 'index: ', finalGroupRec)
        updateDoc(doc(db, "users", elem.id), {group: finalGroupRec})

      })


    } catch (err) {
      console.log(err);
    }
  };
};
