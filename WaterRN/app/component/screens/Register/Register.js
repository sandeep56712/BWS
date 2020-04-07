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
import SwitchSelector from "react-native-switch-selector";

import { NavigationActions, StackActions } from "react-navigation";
import AsyncStorage from "@react-native-community/async-storage";

import styles from "./Register_Style";

export default class Register extends Component {
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
                  placeholder="abc"
                  keyboardType="default"
                  autoCapitalize="none"
                  style={styles.textInput}
                  // onChangeText={(textInputEmail) =>
                  //   this.setState({ textInputEmail })
                  // }
              />
               <View style={styles.viewUnderLine}/>
              </View>
              </View> 
              <View style={styles.viewInput}>
                 <Image
                  style={styles.imageIcon}
                  source={require("../../Image/mobile.png")}
                />
                <View style={styles.viewBox}>
                  <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="123456789"
                  keyboardType="numeric"
                  autoCapitalize="none"
                  style={styles.textInput}
                  // onChangeText={(textInputEmail) =>
                  //   this.setState({ textInputEmail })
                  // }
              />
               <View style={styles.viewUnderLine}/>
              </View>
              </View> 
               <View style={styles.viewInput}>
                 <Image
                  style={styles.imageIcon}
                  source={require("../../Image/email.png")}
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
               <View style={styles.viewInputPassword}>
                 <Image
                  style={styles.imageIcon}
                  source={require("../../Image/password.png")}
                />
                <View style={styles.viewBox}>
                  <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Confirm Password"
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
              <View style={styles.btnToggle}>
             <SwitchSelector
                initial={0}
                onPress={value => this.setState({ gender: value })}
                textColor="#0f83cc" //'#7a44cf'
                selectedColor="white"
                buttonColor="#0f83cc"
                borderColor="#0f83cc"
                selectedTextStyle={{fontSize:16,fontWeight:'bold'}}
                hasPadding
                options={[
                  { label: "Retailer", value: "r",  }, //images.feminino = require('./path_to/assets/img/feminino.png')
                  { label: "Customer", value: "c", } //images.masculino = require('./path_to/assets/img/masculino.png')
                ]}
              />
              </View>
               <TouchableOpacity onPress={() =>this.props.navigation.navigate("OtpVerification")} style={styles.btnRegistration}>
               <Text style={styles.txtSign}>Register</Text>
              </TouchableOpacity> 
              <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={styles.btnForgot}>
               <Text style={styles.txtForgot}>Already have an Account click here</Text>
              </TouchableOpacity>

            </View>
           </View>
         </SafeAreaView> 
         </ScrollView>
      ); 
} 
}