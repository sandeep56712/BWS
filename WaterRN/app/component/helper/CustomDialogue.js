
import React, { PureComponent } from 'react';
import { View, Text, NetInfo, Dimensions, StyleSheet,Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';

class CustomDialogue extends PureComponent {
CustomAlert(text){
		Alert.alert("GoonTunez",text,
				 [
			   {text: 'OK', onPress: () =>{}},
			  // {text: 'cancel', onPress: () =>{}}
			 ],
			 {
			   cancelable: false
			 });
	}
}
export default CustomDialogue;