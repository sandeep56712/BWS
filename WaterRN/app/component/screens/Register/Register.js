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
  Button,
} from "react-native";
import SwitchSelector from "react-native-switch-selector";
import Validation from "../../helper/Validation";
import CustomDialogue from "../../helper/CustomDialogue";

import { NavigationActions, StackActions } from "react-navigation";
import AsyncStorage from "@react-native-community/async-storage";

import styles from "./Register_Style";
import firebase from "react-native-firebase";
import Api from '../../webservice/ApiCalling';

export default class Register extends Component {
  constructor(props, ctx) {
    super(props);
    this.state = {
      user: null,
      message: "",
      codeInput: "",
      phoneNumber: "+91",
      confirmResult: null,
      loading: false,
      textInputEmail: "",
      textInputContact: "",
      textInputPassword: "",
      textInputCnfPassword: "",
      textInputFullName: "",
      customer_type: 0,
      border_clr: "rgba(0,0,0,0.15)",
      inputwidth: 1,
    };
  }

  onTextFocus(select) {
    this.setState({ selectPos: select, border_clr: "#01b875", inputwidth: 1 });
  }
  onTextBlur(select) {
    this.setState({
      selectPos: select,
      border_clr: "rgba(0,0,0,0.15)",
      inputwidth: 1,
    });
  }
  checkValidation() {
    const {
      textInputFullName,
      textInputCnfPassword,
      textInputContact,
      textInputEmail,
      textInputPassword,
      customer_type,
    } = this.state;
    if (textInputFullName.length == 0) {
      new CustomDialogue().CustomAlert("Please Enter Full Name");
    } else if (textInputContact.length === 0) {
      new CustomDialogue().CustomAlert("Please Enter Contact Number");
    } else if (textInputContact.length < 10) {
      new CustomDialogue().CustomAlert("Please Enter valid Contact Number");
    } else if (textInputEmail.length === 0) {
      new CustomDialogue().CustomAlert("Please Enter Email Address");
    } else if (textInputPassword.length === 0) {
      new CustomDialogue().CustomAlert("Please Enter Password");
    } else if (textInputCnfPassword.length === 0) {
      new CustomDialogue().CustomAlert("Please Enter Confirm Password");
    } else if (Validation.isValidEmail(textInputEmail)) {
      new CustomDialogue().CustomAlert("Please Enter valid Email Address");
    } else if (Validation.isValidPassword(textInputPassword)) {
      new CustomDialogue().CustomAlert("Please Enter alfa numeric password");
    } else if (textInputPassword != textInputCnfPassword) {
      new CustomDialogue().CustomAlert("Confirm password does not match");
    } else {
      // this.registerApi()
      this.signIn();
      // new CustomDialogue().CustomAlert("Confirm password does not match");
    }
  }
  signIn = () => {
    const { phoneNumber, textInputContact } = this.state;
    var mobile_number = phoneNumber + "" + textInputContact;
    console.log("mobile number is------->", mobile_number);
    this.setState({ loading: true });
    firebase
      .auth()
      .signInWithPhoneNumber(mobile_number)
      .then((confirmResult) => this.setState({ confirmResult, loading: false }))
      .catch((error) => this.setState({ loading: false }));
  };

  confirmCode = () => {
    const { codeInput, confirmResult } = this.state;
    this.setState({ loading: true });
    if (codeInput.length < 6) {
      new CustomDialogue().CustomAlert("Please enter 6 digit otp.");
      this.setState({ loading: false });
    } else {
      if (confirmResult && codeInput.length) {
        confirmResult
          .confirm(codeInput)
          .then((user) => {
            console.log("user is------>", user);
            new CustomDialogue().CustomAlert("mobile number verified");
            this.setState({ loading: false });
            this.registerApi();
            
          })
          .catch((error) => this.verify(error));
      }
    }
  };

  verify(error) {
    if (error.code === "auth/invalid-verification-code") {
      new CustomDialogue().CustomAlert("Otp Not match");
      this.setState({ loading: false });
    }
  }
  renderPhoneNumberInput() {
    const { textInputContact } = this.state;

    return (
      <View>
        <Image
          style={styles.imageStyleLogo}
          source={require("../../Image/logo.jpg")}
        />
        <View style={styles.loginContent}>
          <View
            style={[
              styles.inputView,
              this.state.selectPos === 1 && {
                borderWidth: this.state.inputwidth,
                borderColor: this.state.border_clr,
              },
            ]}
          >
            <Image
              style={styles.imageIcon}
              source={require("../../Image/user.png")}
            />
            <TextInput
              style={styles.textPassword}
              onFocus={() => this.onTextFocus(1)}
              onBlur={() => this.onTextBlur(1)}
              underlineColorAndroid="transparent"
              placeholderTextColor="#8C97AA"
              spellCheck={false}
              placeholder="Full Name"
              keyboardType="default"
              returnKeyType={"next"}
              onChangeText={text => this.setState({ textInputFullName: text })}
              value={this.state.textInputFullName}
              // onSubmitEditing={() => {
              //   this.last_name.focus();
              // }}
            />
          </View>
        </View>
        <View style={styles.loginContent}>
          <View
            style={[
              styles.inputView,
              this.state.selectPos === 2 && {
                borderWidth: this.state.inputwidth,
                borderColor: this.state.border_clr,
              },
            ]}
          >
            <Image
              style={styles.imageIcon}
              source={require("../../Image/user.png")}
            />
            <TextInput
              style={styles.textPassword}
              onFocus={() => this.onTextFocus(2)}
              onBlur={() => this.onTextBlur(2)}
              underlineColorAndroid="transparent"
              placeholderTextColor="#8C97AA"
              spellCheck={false}
              placeholder="Phone"
              returnKeyType={"next"}
              keyboardType="numeric"
              onChangeText={text => this.setState({ textInputContact: text })}
              value={this.state.textInputContact}
              // onSubmitEditing={() => {
              //   this.last_name.focus();
              // }}
            />
          </View>
        </View>
        <View style={styles.loginContent}>
          <View
            style={[
              styles.inputView,
              this.state.selectPos === 3 && {
                borderWidth: this.state.inputwidth,
                borderColor: this.state.border_clr,
              },
            ]}
          >
            <Image
              style={styles.imageIcon}
              source={require("../../Image/user.png")}
            />
            <TextInput
              style={styles.textPassword}
              onFocus={() => this.onTextFocus(3)}
              onBlur={() => this.onTextBlur(3)}
              underlineColorAndroid="transparent"
              placeholderTextColor="#8C97AA"
              spellCheck={false}
              placeholder="Email"
              keyboardType="email-address"
              returnKeyType={"next"}
              onChangeText={text => this.setState({ textInputEmail: text })}
              value={this.state.textInputEmail}
              onSubmitEditing={() => {
                this.last_name.focus();
              }}
            />
          </View>
        </View>
        <View style={styles.loginContent}>
          <View
            style={[
              styles.inputView,
              this.state.selectPos === 4 && {
                borderWidth: this.state.inputwidth,
                borderColor: this.state.border_clr,
              },
            ]}
          >
            <Image
              style={styles.imageIcon}
              source={require("../../Image/password.png")}
            />
            <TextInput
              style={styles.textPassword}
              onFocus={() => this.onTextFocus(4)}
              onBlur={() => this.onTextBlur(4)}
              underlineColorAndroid="transparent"
              placeholderTextColor="#8C97AA"
              spellCheck={false}
              placeholder="Password"
              keyboardType="default"
              secureTextEntry={true}
              returnKeyType={"next"}
              keyboardType="default"
              onChangeText={text => this.setState({ textInputPassword: text })}
              value={this.state.textInputPassword}
              // onSubmitEditing={() => {
              //   this.last_name.focus();
              // }}
            />
          </View>
        </View>
         <View style={styles.loginContent}>
          <View
            style={[
              styles.inputView,
              this.state.selectPos === 5 && {
                borderWidth: this.state.inputwidth,
                borderColor: this.state.border_clr,
              },
            ]}
          >
            <Image
              style={styles.imageIcon}
              source={require("../../Image/password.png")}
            />
            <TextInput
              style={styles.textPassword}
              onFocus={() => this.onTextFocus(5)}
              onBlur={() => this.onTextBlur(5)}
              underlineColorAndroid="transparent"
              placeholderTextColor="#8C97AA"
              spellCheck={false}
              placeholder="Confirm Password"
              keyboardType="default"
              secureTextEntry={true}
              returnKeyType={"next"}
              keyboardType="default"
              onChangeText={text => this.setState({ textInputCnfPassword: text })}
              value={this.state.textInputCnfPassword}
              // onSubmitEditing={() => {
              //   this.last_name.focus();
              // }}
            />
          </View>
        </View>
        <View style={styles.btnToggle}>
          <SwitchSelector
            initial={0}
            onPress={(value) => this.setState({ customer_type: value })}
            textColor="#01b875" //'#7a44cf'
            selectedColor="white"
            buttonColor="#01b875"
            borderColor="#01b875"
            selectedTextStyle={{ fontSize: 16, fontWeight: "bold" }}
            hasPadding
            options={[
              { label: " Customer  ", value: "consumer" }, //images.masculino = require('./path_to/assets/img/masculino.png')
              { label: "Retailer ", value: "Retailer" }, //images.feminino = require('./path_to/assets/img/feminino.png')
            ]}
          />
        </View>
        <TouchableOpacity
          onPress={() => this.checkValidation()}
          style={styles.btnRegistration}
        >
          <Text style={styles.txtSign}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}
          style={styles.btnForgot}
        >
          <Text style={styles.txtForgot}>
            Already have an Account click here
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  renderVerificationCodeInput() {
    const { codeInput } = this.state;

    return (
      <View>
        <View style={ss.container}>
          <Image
            style={ss.imageStyleLogo}
            source={require("../../Image/verify.png")}
          />
          <Text style={ss.txtForgot}>VERIFY MOBILE NUMBER</Text>
          <Text style={ss.txt}>Lorem inspum or inspum as it sometime.</Text>
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
                  onChangeText={(value) => this.setState({ codeInput: value })}
                />
                <View style={ss.viewUnderLine} />
              </View>
            </View>

            <TouchableOpacity style={ss.btnSignIn}>
              <Text onPress={this.confirmCode} style={ss.txtSign}>
                Continue
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={ss.btnForgot}
            >
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

  registerApi = async () => {
    console.log("inside register api------>")
   
    const {textInputEmail, textInputPassword,textInputContact,textInputFullName,customer_type } = this.state; 
    var params = {
        email:textInputEmail,
        password:textInputPassword,
        name:textInputFullName,
        phone:textInputContact,
        user_type:customer_type
        
      };
    
    console.log("Register.JS"," LOGIN_API request params :- " + JSON.stringify(params));
    var jsonParams = JSON.stringify(params);
    try { 
      this.setState({ loading: true});
      var jsonDataList = await Api.post(Api.REGISTER, jsonParams);
      if(jsonDataList.status == 200 ) {  //
        var data =  jsonDataList.data.user_details;
        this.setState({ loading: false});
        console.log("data is----->",data);
        this.saveData(data);
        this.props.navigation.navigate("Home");
      } else if(jsonDataList.status == 201 ) {
        this.setState({ loading: false});
        console.log("Login.JS"," 201 response :- " + JSON.stringify(jsonDataList));
        new CustomDialogue().CustomAlert("Username or password is incorrect !");
        // new CustomDialogue().CustomAlert("Access denied");
      } else if (jsonDataList.status == 202 ) {
        this.setState({ loading: false});
        console.log("Login.JS"," 201 response :- " + JSON.stringify(jsonDataList));
        new CustomDialogue().CustomAlert("Internet not connected !");
        // new CustomDialogue().CustomAlert("Access denied");
      } else{
        this.setState({ loading: false});
        new CustomDialogue().CustomAlert("Some error occurred !");
      }
    }  catch(error){
      console.log("Login.Js", "inside catch" + error);
      this.setState({loading:false})
      new CustomDialogue().CustomAlert("Some error occurred !");
    }
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
