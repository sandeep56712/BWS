import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import Header from "../Header/Header";
import styles from "./ChangePassword_Style";
import { NavigationActions, StackActions } from "react-navigation";
import { drawer } from "../../AppNavigation";
import Footer from "../../helper/Footer";


export default class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
     border_clr: "#ff7070",
      inputwidth: 1,
      
  }

 
 }

  onTextFocus(select) {
    this.setState({ selectPos: select, border_clr: "#ff7070", inputwidth: 1 });
  }
  onTextBlur(select) {
    this.setState({ selectPos: select, border_clr: "#ff7070", inputwidth: 1 });
  }



 

  render() {
    return (
      <View style={{ flex: 1 ,backgroundColor:'red'}}>
        <Header
                navigation={this.props.navigation}
                title={"Change Password"}
                isBack={false}
                isHomeIcon={true}
            />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: "white" }}
        >

          <View style={styles.viewMain}>
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
                  placeholder="Enter old password"
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
                  placeholder="Enter new password"
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
                  placeholder="Enter confirm password"
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
              </View>
            <TouchableOpacity  style={styles.btnSignIn}>
               <Text style={styles.txtSign}>SAVE</Text>
              </TouchableOpacity>
          </View>
          
        </ScrollView>
        
      </View>
    );
  }
}




