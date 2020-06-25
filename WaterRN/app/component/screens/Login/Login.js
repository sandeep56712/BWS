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
    this.state = 
    {
       textInputEmail:'',
       textInputPassword:'',
       border_clr: "#01b875",
       inputwidth: 1, 
       loading:false,

    }
  }


login(){
  const {textInputPassword,textInputEmail} = this.state;
  if (textInputEmail.length === 0) {
  new CustomDialogue().CustomAlert("Please Enter Email Address");
  } else if(textInputPassword.length == 0){
  new CustomDialogue().CustomAlert("Please Enter Password");
  }else{
    this.callLoginApi()
    
  }
}
callRegister()
{
      this.props.navigation.navigate("Register");

}
onTextFocus(select){ 
    this.setState({selectPos:select, border_clr: "#01b875", inputwidth: 1 });
  }
   onTextBlur(select) {
    this.setState({selectPos:select, border_clr: "#01b875", inputwidth: 1 });
  }
  callLoginApi = async () => {
    // # Login from openapi.yaml file
    const {textInputEmail, textInputPassword} = this.state; 
    var params = {
        email:textInputEmail,
        password:textInputPassword,
        
      };
    
    console.log("Login.JS"," LOGIN_API request params :- " + JSON.stringify(params));
    var jsonParams = JSON.stringify(params);
    try { 
      this.setState({ loading: true});
      var jsonDataList = await Api.post(Api.LOGIN_API, jsonParams);
      if(jsonDataList.status == 200 ) {  //
        var data =  jsonDataList.data;
        this.setState({ loading: false});
        console.log("data is----->",data);
        this.saveData(data);
      } else if(jsonDataList.status == 403 ) {
        this.setState({ loading: false});
        console.log("Login.JS"," 403 response :- " + JSON.stringify(jsonDataList));
        new CustomDialogue().CustomAlert("Username or password is incorrect !");
        // new CustomDialogue().CustomAlert("Access denied");
      } else if (jsonDataList.status == 301 ) {
        this.setState({ loading: false});
        console.log("Login.JS"," 301 response :- " + JSON.stringify(jsonDataList));
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

saveData = async userData =>{
    // await AsyncStorage.setItem("isLogin", userData.is_login);
    // await AsyncStorage.setItem("user_id", userData.id);
    // await AsyncStorage.setItem("user_role", userData.type);
    // await AsyncStorage.setItem("token", userData.token);
    // var user_data = {
    //   user_id: userData.id,
    //   user_name: userData.user_name,
    //   user_email: userData.email,
    //   user_contact: userData.mobile,
    //   user_role: userData.type,
    //   user_gender:userData.gender,
    //   user_profile: "",
    //   user_address: userData.address,    
    //   token:userData.token  
    // };
    // await AsyncStorage.setItem("userData", JSON.stringify(user_data));
    this._navigateTo("Home");
 
}
 

render() {
 if(this.state.loading){
      return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
          <ActivityIndicator animating={true} size="large" color="#57C21B" style={{justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',  }}/>
        </View>
       )
      }
    return (
         <ScrollView   showsVerticalScrollIndicator ={false}>
          <SafeAreaView  style={{ flex: 1 }}>
           <View style={styles.container}>
              <Image
              style={styles.imageStyleLogo}
              source={require("../../Image/logo.jpg")}
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
                  placeholder="Email or Phone"
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#8C97AA"
                  spellCheck={false}
                  returnKeyType={"next"}
                  keyboardType="default"
                  onChangeText={text => this.setState({ textInputEmail: text })}
                  value={this.state.textInputEmail}
                  // onSubmitEditing={() => {
                  //   this.last_name.focus();
                  // }}
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
                  onChangeText={text => this.setState({ textInputPassword: text })}
                  value={this.state.textInputPassword}
                  // onSubmitEditing={() => {
                  //   this.last_name.focus();
                  // }}
                />
              </View>
              </View>
               <TouchableOpacity onPress={() =>this.props.navigation.navigate("ForgotPassword")} style={styles.btnForgot}>
               <Text style={styles.txtForgot}>Forgot Password ?</Text>
              </TouchableOpacity>
             
             
              <TouchableOpacity onPress={() =>this.login()} style={styles.btnSignIn}>
               <Text style={styles.txtSign}>LOG IN</Text>
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

//Don't remove shubham
// callGetTripDetailsApi = async (authorized_token) => {
//     try {
//       var URL = Api.USER;

//       console.warn("DriverScreen.JS", " get Trip driver details url :- " + authorized_token);

//       var jsonDataList = await Api.getWithHeader(URL, authorized_token);

//       if (jsonDataList.status == 200) {

//      console.warn("DriverScreen.JS", " get Trip driver details url :- " + jsonDataList);

//       } 
//     } catch (error) {
//       console.log("DriverScreen.Js", "inside catch" + error);
     
//     }
//   };