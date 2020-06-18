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

import Api from '../../webservice/ApiCalling';




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
  // if (textInputEmail.length === 0) {
  // new CustomDialogue().CustomAlert("Please Enter Email Address");
  // } else if(textInputPassword.length == 0){
  // new CustomDialogue().CustomAlert("Please Enter Password");
  // }else{
    this.callLoginApi()
    // this.props.navigation.navigate("Home");
  // }
}
callRegister()
{
      this.props.navigation.navigate("Register");

}
onTextFocus(select){ 
    this.setState({selectPos:select, border_clr: "#0f83cc", inputwidth: 1 });
  }
   onTextBlur(select) {
    this.setState({selectPos:select, border_clr: "rgba(0,0,0,0.15)", inputwidth: 1 });
  }
  callLoginApi = async () => {
    // # Login from openapi.yaml file

    const {emailValue, passwordValue, device_token} = this.state; 

    var params ;

      var params = {
        email:"sandeep.webvillee@gmail.com",
        password:"abc123",
        
      };
    

    console.log("Login.JS"," LOGIN_API device_token :- " + device_token);
    console.log("Login.JS"," LOGIN_API request params :- " + JSON.stringify(params));
    var jsonParams = JSON.stringify(params);

    try { 
      this.setState({ loading: true});
      var jsonDataList = await Api.post(Api.LOGIN_API, jsonParams);

      // console.log("Login.JS"," Login jsonDataList.id :- " + JSON.stringify(jsonDataList));
      if(jsonDataList.status == 200 ) {  //

        var data =  jsonDataList.data;
        console.log("data is----->",data);
        this.callGetTripDetailsApi("Bearer " + data.token)
        // Login Response
        /*
        {"status":200,"data":{"userName":"demo","password":null,"id":"c43eaf2f-893f-4f5b-b484-030975a45a62",
        "firstName":"Demo","lastName":"User","created":"2020-01-16T13:47:02.981Z","email":"demo@user.com",
        "primaryPhone":null,"otherPhone":null,"groups":[],"roles":["ADMIN"],"active":true,"zones":null,
        "places":null,"placeNicknames":null},
        "token":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZW1vIiwiZXhwIjoxNTgwNTQxOTMyfQ.3Ox_iY9be4sCQv_2lObA0iNFU-9hfUQ08FNpMZnO5u-uYIRy0yTHpX74-3mUkRyRHx2a6QPRWW9QS8BejuoAPw"}'
        */ 

        // this.saveDataToAsyncStorage(jsonDataList);

      } else if(jsonDataList.status == 403 ) {
        this.setState({ loading: false});
        console.log("Login.JS"," 403 response :- " + JSON.stringify(jsonDataList));
        this.showAlert("Username or password is incorrect !");
        // new CustomDialogue().CustomAlert("Access denied");
      } else if (jsonDataList.status == 301 ) {
        this.setState({ loading: false});
        console.log("Login.JS"," 301 response :- " + JSON.stringify(jsonDataList));
        this.showAlert("Internet not connected !");
        // new CustomDialogue().CustomAlert("Access denied");
      } else{
        this.setState({ loading: false});
        this.showAlert("Some error occurred !");
      }
    }  catch(error){
      console.log("Login.Js", "inside catch" + error);
      this.setState({loading:false})
      this.showAlert("Some error occurred !");
    }
  }

callGetTripDetailsApi = async (authorized_token) => {
    //  /trips/{tripId}/driverDetails

    // https://api.rubyride.co/v1/shifts/:shiftId


    try {
      var URL = Api.USER;

      console.warn("DriverScreen.JS", " get Trip driver details url :- " + authorized_token);

      var jsonDataList = await Api.getWithHeader(URL, authorized_token);

      if (jsonDataList.status == 200) {

     console.warn("DriverScreen.JS", " get Trip driver details url :- " + jsonDataList);

      } 
    } catch (error) {
      console.log("DriverScreen.Js", "inside catch" + error);
     
    }
  };

 

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