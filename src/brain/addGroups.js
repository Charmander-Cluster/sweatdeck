import { collection, getDocs, updateDoc , doc} from "firebase/firestore";
import db from "../firebase.js";
import { ageCalc, latCalc, longCalc} from './dataMods'
import {reco} from './index'


export const changeData = () => {
    return async () => {
      try {
        const userData = await getDocs(collection(db, "users"))
        userData.docs.map((elem) => {
          let data = elem.data()
          let age = ageCalc(data.birthday)
          let latitude = data.lat
          let longitude = data.long
          let groupRec = reco([age, latitude, longitude])
          let finalGroupRec = groupRec.indexOf(Math.max(...groupRec))
          console.log(age, latitude, longitude)
          console.log("groupRec: ", groupRec)
          console.log("max: ", Math.max(...groupRec))
          console.log("index: ", finalGroupRec)
          //updateDoc(doc(db, "users", elem.id), {group: finalGroupRec})
  
        })
      } catch (err) {
        console.log(err);
      }
    };
  };