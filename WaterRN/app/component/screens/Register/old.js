
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
  Button
} from "react-native";
import SwitchSelector from "react-native-switch-selector";
import Validation from "../../helper/Validation";
import CustomDialogue from "../../helper/CustomDialogue";

import { NavigationActions, StackActions } from "react-navigation";
import AsyncStorage from "@react-native-community/async-storage";

import styles from "./Register_Style";
import firebase from 'react-native-firebase'

export default class Register extends Component {
  constructor(props, ctx) {
    super(props);
    this.state = {
      user: null,
      message: '',
      codeInput: '',
      phoneNumber: '+91',
      confirmResult: null,
      loading:false,
      textInputEmail:'',
      textInputContact:'',
      textInputPassword:'',
      textInputCnfPassword:'',
      textInputFullName:'',
      customer_type:0,
      border_clr: "rgba(0,0,0,0.15)",
      inputwidth: 1, 
    }
  }

onTextFocus(select){ 
    this.setState({selectPos:select, border_clr: "#0f83cc", inputwidth: 1 });
  }
   onTextBlur(select) {
    this.setState({selectPos:select, border_clr: "rgba(0,0,0,0.15)", inputwidth: 1 });
  }
checkValidation(){
  const {textInputFullName,textInputCnfPassword,textInputContact,textInputEmail,textInputPassword,customer_type} = this.state;
 if (textInputFullName.length == 0) {
  new CustomDialogue().CustomAlert("Please Enter Full Name");
 }else if(textInputContact.length===0){
  new CustomDialogue().CustomAlert("Please Enter Contact Number");
  }else if (textInputContact.length < 10) {
  new CustomDialogue().CustomAlert("Please Enter valid Contact Number");

  }else if(textInputEmail.length === 0){
  new CustomDialogue().CustomAlert("Please Enter Email Address");

  }else if(textInputPassword.length===0){
  new CustomDialogue().CustomAlert("Please Enter Password");
  }else if(textInputCnfPassword.length === 0){
  new CustomDialogue().CustomAlert("Please Enter Confirm Password");

  } else if(Validation.isValidEmail(textInputEmail)){
   new CustomDialogue().CustomAlert("Please Enter valid Email Address");

  }else if(Validation.isValidPassword(textInputPassword)){
   new CustomDialogue().CustomAlert("Please Enter alfa numeric password");

  }else if(textInputPassword != textInputCnfPassword ){
   new CustomDialogue().CustomAlert("Confirm password does not match");

  }
  else{
    this.signIn();
   // new CustomDialogue().CustomAlert("Confirm password does not match");
     
  }

}
 signIn = () => {
    const { phoneNumber,textInputContact } = this.state;
    var mobile_number = phoneNumber+''+textInputContact;
    console.log("mobile number is------->",mobile_number);
    this.setState({ loading:true});
    firebase.auth().signInWithPhoneNumber(mobile_number)
      .then(confirmResult => this.setState({ confirmResult, loading:false }))
      .catch(error => this.setState({ loading:false}));
  };

confirmCode = () => {
    const { codeInput, confirmResult } = this.state;
    this.setState({loading:true});
   if (codeInput.length < 6) {
        new CustomDialogue().CustomAlert("Please enter 6 digit otp.");
       this.setState({loading:false});

   }else{
    if (confirmResult && codeInput.length) {
      confirmResult.confirm(codeInput)
        .then((user) => {
          console.log("user is------>",user)
        new CustomDialogue().CustomAlert("mobile number verified");
          this.setState({ loading:false });
          this.props.navigation.navigate("Home");
        })
        .catch(error =>this.verify(error));
    }
  }
  };

verify(error){
  if (error.code==='auth/invalid-verification-code') {
       new CustomDialogue().CustomAlert("Otp Not match");
    this.setState({ loading:false});

  }

}
renderPhoneNumberInput() {
   const { textInputContact } = this.state;
      
    return (
      <View >
            <Image
              style={styles.imageStyleLogo}
              source={require("../../Image/logo.png")}
            /> 
            <View style={styles.loginContent}>
               <View  style={[
                  styles.inputView,(this.state.selectPos === 1)&&
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
                  onFocus={() => this.onTextFocus(1)}
                  onBlur={() => this.onTextBlur(1)}
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
              



              <View style={styles.btnToggle}>
               <SwitchSelector
                  initial={0}
                  onPress={value => this.setState({ customer_type: value })}
                  textColor="#0f83cc" //'#7a44cf'
                  selectedColor="white"
                  buttonColor="#0f83cc"
                  borderColor="#0f83cc"
                  selectedTextStyle={{fontSize:16,fontWeight:'bold'}}
                  hasPadding
                  options={[
                    { label: "Customer", value: "0", }, //images.masculino = require('./path_to/assets/img/masculino.png')
                     { label: "Retailer", value: "1",  } //images.feminino = require('./path_to/assets/img/feminino.png')
                  ]}
                />
              </View>
               <TouchableOpacity onPress={() =>this.checkValidation()} style={styles.btnRegistration}>
               <Text style={styles.txtSign}>Register</Text>
              </TouchableOpacity> 
              <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={styles.btnForgot}>
               <Text style={styles.txtForgot}>Already have an Account click here</Text>
              </TouchableOpacity>
            </View>
      </View>
    );
  } 
renderVerificationCodeInput() {
    const { codeInput } = this.state;
  
    return (
      <View >
          <View style={ss.container}>
              <Image
              style={ss.imageStyleLogo}
              source={require("../../Image/verify.png")}
            />
            <Text style={ss.txtForgot} >VERIFY MOBILE NUMBER</Text>
            <Text style={ss.txt} >Lorem inspum or inspum as it sometime.</Text>
            <View style={ss.loginContent}>
              <View style={ss.viewInput}>
                 <Image
                  style={ss.imageIcon}
                  source={require("../../Image/contact.png")}
                />
                <View style={ss.viewBox}>
                  <TextInput
                   autoFocus
                  underlineColorAndroid="transparent"
                  placeholder="123456"
                  keyboardType="numeric"
                  autoCapitalize="none"
                  style={ss.textInput}
                  value={codeInput}
                  onChangeText={value => this.setState({ codeInput: value })}
                  
              />
               <View style={ss.viewUnderLine}/>
              </View>
              </View>
             
             
              <TouchableOpacity style={ss.btnSignIn}>
               <Text onPress={this.confirmCode} style={ss.txtSign}>Continue</Text>
              </TouchableOpacity>
                
             <TouchableOpacity onPress={() =>this.props.navigation.goBack()} style={ss.btnForgot}>
                 <Image
                style={ss.imageIconBack}
                source={require("../../Image/back.png")}
              />
               <Text style={ss.txtGoback}>Go Back</Text>
              </TouchableOpacity>

            </View>
           </View>
      </View>
    );
  }
  render() {
      if (this.state.loading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator animating={true} />
        </View>
      );
    }
    const { user, confirmResult } = this.state;
    return (
         <ScrollView>
          <SafeAreaView style={{ flex: 1 }}>
           <View style={styles.container}>
           {!user && !confirmResult && this.renderPhoneNumberInput()}
             {!user && confirmResult && this.renderVerificationCodeInput()}
        
          
           </View>
         </SafeAreaView> 
         </ScrollView>
      ); 
} 
}

const ss = StyleSheet.create({
container:{
  flex:1,

},
imageStyleLogo:{
  height:120,
  width:120,
  alignSelf:'center',
  marginTop:120,
},
loginContent:{
 flex:1,
 width:"100%",
},
viewInput:{
  flexDirection:'row',
  marginTop:60,
    width:'80%',
    alignSelf:'center',
},
viewInputPassword:{
  flexDirection:'row',
  marginTop:20,
    width:'80%',
    alignSelf:'center',
},
imageIcon:{
 height:35,
 width:35,
 resizeMode:'contain',
 // backgroundColor:'red',

},
viewUnderLine:{
 height:1,
 backgroundColor:'#0f83cc',
 marginLeft: 10,

},
viewBox:{
  flexDirection:'column',
  width:'80%',
},

textInput:{
  marginLeft: 10,
  // paddingLeft:5,
    height: 25,
  fontSize:14,
  marginTop:3,
},
btnSignIn:{
   height:40,
   backgroundColor:'#0f83cc',
   marginTop:30,
   borderRadius:20,
   alignSelf:'center',
   width:"65%",
   // alignItem:'center',
   justifyContent:'center',

},


txtSign:{
 textAlign:'center',
 color:'white',
 fontWeight:'500',
 fontSize:18,
},
txtForgot:{
 textAlign:'center',
 color:'#0f83cc',
 fontWeight:'500',
 fontSize:16,
 marginTop:5,
},

txt:{
  textAlign:'center',
  fontSize:12,
  marginTop:5,
  color:'grey',
},
txtGoback:{
 textAlign:'center',
 color:'#0f83cc',
 fontWeight:'500',
 fontSize:16,
 marginTop:15,
 marginLeft:10,
},
btnForgot:{
  flexDirection:'row',
  alignSelf:'center',
},
imageIconBack:{
 height:25,
 width:25,
 resizeMode:'contain',
 marginTop:12,
 // backgroundColor:'red',

},
});