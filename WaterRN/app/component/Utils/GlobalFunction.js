import { Platform,Dimensions } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

export const getUserData = async () => {
	var userData = null; 
	 try {    
	 userData = await AsyncStorage.getItem('userModule');
	  console.log("userModule global function------->" , userData)
     if (userData !== null) {
        console.log(userData)
     }
  }
  catch (e) {
    console.log('We have the error', e);
  }
 return JSON.parse(userData);
}



export function getCapitalize (str) {
  if (str == null || str.length === 0) return "";

return str.charAt(0).toUpperCase() + str.slice(1);
}