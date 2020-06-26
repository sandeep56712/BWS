import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import styles from "./Splash_Style";
import { NavigationActions, StackActions } from "react-navigation";
import AsyncStorage from "@react-native-community/async-storage";
import { Auth } from 'aws-amplify'

export default class Splash extends Component {

  componentWillMount() {
    console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
    // StatusBar.setHidden(true);
    //DO SOMETHING
    this.interval = setTimeout(() => {
      AsyncStorage.getItem("userData").then((result) => {
        if (result != undefined) {
          var jsonstr = JSON.parse(result);
          console.log(
            "AsyncStorage loggedInStatus===========" + jsonstr.loggedInStatus
          );
         
          if (jsonstr.loggedInStatus == 'Active') {
            //this.props.navigation.navigate('Home');
            this.navigateTo("Home");
          } else {
            //this.props.navigation.navigate('Login');
            this.navigateTo("Login");
          }
        } else {
          this.navigateTo("Login");
        }
        console.log("get storage value -- " + jsonstr);
      });
    }, 2000);
  }
 checkUserSession = async () => {
    var isLogin = await AsyncStorage.getItem("isLogin");
    this.interval = setTimeout(() => {
      if (isLogin == "1") {
        this._navigateTo("Home");
      } else {
        this._navigateTo("Login");
      }
       
    }, 2000);
  }; 
  navigateTo = (routeName: string) => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })],
    });
    this.props.navigation.dispatch(resetAction);
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          style={styles.imageView}
          source={require("../../Image/logo.jpg")}
        />
      </View>
    );
  }
}
