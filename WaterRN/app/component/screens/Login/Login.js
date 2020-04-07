import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Alert,
  ActivityIndicator,
  ImageBackground,
} from "react-native";

import { NavigationActions, StackActions } from "react-navigation";
import AsyncStorage from "@react-native-community/async-storage";

import styles from "./Login_Style";

export default class Login extends Component {
  constructor(props, ctx) {
    super(props);
    this.state = {}
  }
  render() {
    return (
         <ScrollView>
          <SafeAreaView style={{ flex: 1 }}>
           <View style={styles.container}>
              <Image
              style={styles.imageStyleLogo}
              source={require("../../Image/logo.png")}
            />
            <View style={styles.loginContent}>
              <View style={styles.viewInput}>
                 <Image
                  style={styles.imageIcon}
                  source={require("../../Image/contact.png")}
                />
                <View style={styles.viewBox}>
                  <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="abc@gmail.com"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={styles.textInput}
                  // onChangeText={(textInputEmail) =>
                  //   this.setState({ textInputEmail })
                  // }
              />
               <View style={styles.viewUnderLine}/>
              </View>
              </View>
              <View style={styles.viewInputPassword}>
                 <Image
                  style={styles.imageIcon}
                  source={require("../../Image/password.png")}
                />
                <View style={styles.viewBox}>
                  <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="**********"
                  keyboardType="default"
                  secureTextEntry={true}

                  autoCapitalize="none"
                  style={styles.textInput}
                  // onChangeText={(textInputEmail) =>
                  //   this.setState({ textInputEmail })
                  // }
              />
               <View style={styles.viewUnderLine}/>
              </View>
              </View>
             
              <TouchableOpacity onPress={() =>this.props.navigation.navigate("Home")} style={styles.btnSignIn}>
               <Text style={styles.txtSign}>Sign in</Text>
              </TouchableOpacity>
               <TouchableOpacity onPress={() =>this.props.navigation.navigate("Register")} style={styles.btnRegistration}>
               <Text style={styles.txtSign}>Registration</Text>
              </TouchableOpacity> 
              <TouchableOpacity onPress={() =>this.props.navigation.navigate("ForgotPassword")} style={styles.btnForgot}>
               <Text style={styles.txtForgot}>Forgot Password ?</Text>
              </TouchableOpacity>

            </View>
           </View>
         </SafeAreaView> 
         </ScrollView>
      ); 
} 
}