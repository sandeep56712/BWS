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
import Validation from "../../helper/Validation";
import CustomDialogue from "../../helper/CustomDialogue";

import styles from "./ForgotPassword_Style";

export default class Forgot extends Component {
  constructor(props, ctx) {
    super(props);
    this.state = {
      textInputEmail:'',
    }
  }
funcForgot(){
  if (this.state.textInputEmail.length === 0) {
  new CustomDialogue().CustomAlert("Please Enter Email Address");  
  }else if(Validation.isValidEmail(this.state.textInputEmail)){
   new CustomDialogue().CustomAlert("Please Enter valid Email Address");

  }else{
    
    this.props.navigation.goBack();
  }
}

  render() {
    return (
         <ScrollView>
          <SafeAreaView style={{ flex: 1 }}>
           <View style={styles.container}>
              <Image
              style={styles.imageStyleLogo}
              source={require("../../Image/forgot.png")}
            />
            <Text style={styles.txtForgot} >Forgot Your Password ?</Text>
            <Text style={styles.txt} >Lorem inspum or inspum as it sometime.</Text>
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
                  value={this.state.textInputEmail}
                  onChangeText={(textInputEmail) =>
                    this.setState({ textInputEmail })
                  }
              />
               <View style={styles.viewUnderLine}/>
              </View>
              </View>
             
             
              <TouchableOpacity onPress={() => this.funcForgot()} style={styles.btnSignIn}>
               <Text style={styles.txtSign}>Continue</Text>
              </TouchableOpacity>
             
             
             <TouchableOpacity onPress={() =>this.props.navigation.goBack()} style={styles.btnForgot}>
                 <Image
                style={styles.imageIconBack}
                source={require("../../Image/back.png")}
              />
               <Text style={styles.txtGoback}>Go Back</Text>
              </TouchableOpacity>
             

            </View>
           </View>
         </SafeAreaView> 
         </ScrollView>
      ); 
} 
}