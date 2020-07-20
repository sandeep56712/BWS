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
import styles from "./EditProfile_Style";
import { NavigationActions, StackActions } from "react-navigation";
import { drawer } from "../../AppNavigation";
import Footer from "../../helper/Footer";


export default class EditProfile extends Component {
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
                title={"Edit Profile"}
                isBack={false}
                isHomeIcon={true}
            />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: "white" }}
        >

          <View style={styles.viewMain}>
          </View>
          <View style={styles.viewMain_2}>
             <View style={styles.viewProfile}>
                  <Image
                style={styles.imageProfile}
                source={require("../../Image/waterback.png")}
              />
            <TouchableOpacity >
            <Image
                style={styles.imageIcon}
                source={require("../../Image/waterback.png")}
              />
              </TouchableOpacity>
            </View>
         
          <View style={styles.viewInput}>
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
                  style={styles.imageIcon2}
                  source={require("../../Image/user.png")}
                />
                <TextInput
                  style={styles.textEmail}
                  onFocus={() => this.onTextFocus(1)}
                  onBlur={() => this.onTextBlur(1)}
                  placeholder="Name"
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#8C97AA"
                  spellCheck={false}
                  returnKeyType={"next"}
                  keyboardType="numeric"
                  onChangeText={(text) =>
                    this.setState({ textInputEmail: text })
                  }
                  value={this.state.textInputEmail}
                  // onSubmitEditing={() => {
                  //   this.last_name.focus();
                  // }}
                />
              </View>
          </View>
          <View style={styles.viewInput}>
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
                  style={styles.imageIcon2}
                  source={require("../../Image/user.png")}
                />
                <TextInput
                  style={styles.textEmail}
                  onFocus={() => this.onTextFocus(2)}
                  onBlur={() => this.onTextBlur(2)}
                  placeholder="Email"
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#8C97AA"
                  spellCheck={false}
                  returnKeyType={"next"}
                  keyboardType="numeric"
                  onChangeText={(text) =>
                    this.setState({ textInputEmail: text })
                  }
                  value={this.state.textInputEmail}
                  // onSubmitEditing={() => {
                  //   this.last_name.focus();
                  // }}
                />
              </View>
          </View><View style={styles.viewInput}>
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
                  style={styles.imageIcon2}
                  source={require("../../Image/user.png")}
                />
                <TextInput
                  style={styles.textEmail}
                  onFocus={() => this.onTextFocus(3)}
                  onBlur={() => this.onTextBlur(3)}
                  placeholder="Mobile number"
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#8C97AA"
                  spellCheck={false}
                  returnKeyType={"next"}
                  keyboardType="numeric"
                  onChangeText={(text) =>
                    this.setState({ textInputEmail: text })
                  }
                  value={this.state.textInputEmail}
                  // onSubmitEditing={() => {
                  //   this.last_name.focus();
                  // }}
                />
              </View>
          </View><View style={styles.viewInput}>
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
                  style={styles.imageIcon2}
                  source={require("../../Image/user.png")}
                />
                <TextInput
                  style={styles.textEmail}
                  onFocus={() => this.onTextFocus(3)}
                  onBlur={() => this.onTextBlur(3)}
                  placeholder="Mobile number"
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#8C97AA"
                  spellCheck={false}
                  returnKeyType={"next"}
                  keyboardType="numeric"
                  onChangeText={(text) =>
                    this.setState({ textInputEmail: text })
                  }
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




