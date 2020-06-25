
// import React, { Component } from "react";
// import {StatusBar,View} from 'react-native'
// import Amplify from '@aws-amplify/core'
// import {Authenticator} from 'aws-amplify-react-native'
// import awsConfig from "../../../aws_file";

// Amplify.configure(awsConfig)
// export default class App extends Component<Props> {
//   constructor(props) {
//     super(props);
//     }
//    render() {
//     console.log("connected is------->",Amplify.configure(awsConfig))
//     return (
//       <View style={{ flex: 1 }}> 
//        <StatusBar barStyle="dark-content" />
      
        
//       </View>
//     );
//   }
// }















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
      AsyncStorage.getItem("user").then((result) => {
        if (result != undefined) {
          var jsonstr = JSON.parse(result);
          console.log(
            "AsyncStorage loggedInStatus===========" + jsonstr.loggedInStatus
          );
          //  isLoggedIn:jsonstr.loggedInStatus,

          if (jsonstr.loggedInStatus == true) {
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
