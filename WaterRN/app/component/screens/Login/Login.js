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
import Validation from "../../helper/Validation";
import CustomDialogue from "../../helper/CustomDialogue";

import styles from "./Login_Style";

export default class Login extends Component {
  constructor(props, ctx) {
    super(props);
    this.state = {
     textInputEmail:'',
     textInputPassword:'',
      border_clr: "rgba(0,0,0,0.15)",
      inputwidth: 1,  

    }
  }


login(){
  const {textInputPassword,textInputEmail} = this.state;
  if (textInputEmail.length === 0) {
  new CustomDialogue().CustomAlert("Please Enter Email Address");
  } else if(textInputPassword.length == 0){
  new CustomDialogue().CustomAlert("Please Enter Password");
  }else{
    this.props.navigation.navigate("Home");
  }
}
onTextFocus(select){ 
    this.setState({selectPos:select, border_clr: "#0f83cc", inputwidth: 1 });
  }
  
  onTextBlur(select) {
    this.setState({selectPos:select, border_clr: "rgba(0,0,0,0.15)", inputwidth: 1 });
  }

  render() {
    return (
         <ScrollView   showsVerticalScrollIndicator ={false}
>
          <SafeAreaView  style={{ flex: 1 }}>
           <View style={styles.container}>
              <Image
              style={styles.imageStyleLogo}
              source={require("../../Image/logo.png")}
            />
            <View style={styles.loginContent}>
              <View style={styles.viewInput}>
                <View  style={[
                  styles.inputView,(this.state.selectPos === 1)&&
                  {
                    borderWidth: this.state.inputwidth,
                    borderColor: this.state.border_clr
                  }
                ]}>
                <Image
                  style={styles.imageIcon}
                  source={require("../../Image/user.png")}
                />
                <TextInput
                  style={styles.textEmail}
                  onFocus={() => this.onTextFocus(1)}
                  onBlur={() => this.onTextBlur(1)}
                  placeholder="Enter Email or Mobile number"
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#8C97AA"
                  spellCheck={false}
                  returnKeyType={"next"}
                  keyboardType="default"
                  // onChangeText={text => this.setState({ firstNameValue: text })}
                  // value={this.state.firstNameValue}
                  onSubmitEditing={() => {
                    this.last_name.focus();
                  }}
                />
              </View>
              <View  style={[
                  styles.inputView,(this.state.selectPos === 2)&&
                  {
                    borderWidth: this.state.inputwidth,
                    borderColor: this.state.border_clr
                  }
                ]}>
                <Image
                  style={styles.imageIcon}
                  source={require("../../Image/password.png")}
                />
                <TextInput
                  style={styles.textPassword}
                  onFocus={() => this.onTextFocus(2)}
                  onBlur={() => this.onTextBlur(2)}
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#8C97AA"
                  spellCheck={false}
                   placeholder="**********"
                  keyboardType="default"
                  secureTextEntry={true}
                  returnKeyType={"next"}
                  keyboardType="default"
                  // onChangeText={text => this.setState({ firstNameValue: text })}
                  // value={this.state.firstNameValue}
                  onSubmitEditing={() => {
                    this.last_name.focus();
                  }}
                />
              </View>
              </View>
               <TouchableOpacity onPress={() =>this.props.navigation.navigate("ForgotPassword")} style={styles.btnForgot}>
               <Text style={styles.txtForgot}>Forgot Password ?</Text>
              </TouchableOpacity>
             
             
              <TouchableOpacity onPress={() =>this.login()} style={styles.btnSignIn}>
               <Text style={styles.txtSign}>LOG IN</Text>
              </TouchableOpacity>
               <TouchableOpacity onPress={() =>this.login()} style={styles.btnFb}>
               <Image
                  style={styles.imageIconFB}
                  source={require("../../Image/facebook.png")}
                />
               <Text style={styles.txtFB}>FACEBOOK</Text>
              </TouchableOpacity> 
              <TouchableOpacity onPress={() =>this.login()} style={styles.btnGmail}>
               <Image
                  style={styles.imageIconFB}
                  source={require("../../Image/google.png")}
                />
               <Text style={styles.txtFB}>GOOGLE</Text>
              </TouchableOpacity>
               <View style={styles.viewNewAccount}>
                <Text style={styles.textNoAccount}>Don't have an account ?</Text>

              <TouchableOpacity
                style={styles.touchClick}
                onPress={() => this.callRegister()}
                >
                <Text style={styles.textClick}>Click Here</Text>
              </TouchableOpacity>
              </View>
             

            </View>
           </View>
         </SafeAreaView> 
         </ScrollView>
      ); 
} 
}