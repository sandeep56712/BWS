import React, { PureComponent } from 'react';
import {  StyleSheet,Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
/* import for langualge string file*/

class CustomDialogue extends PureComponent {
CustomAlert(text){
		Alert.alert("Water Supplier",text,
				 [
			   {text: "ok", onPress: () =>{}},
			  // {text: 'cancel', onPress: () =>{}}
			 ],
			 {
			   cancelable: false
			 });
	}
}
export default CustomDialogue;