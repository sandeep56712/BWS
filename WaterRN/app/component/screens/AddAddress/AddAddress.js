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
import styles from "./AddAddress_Style";
import { NavigationActions, StackActions } from "react-navigation";
import { drawer } from "../../AppNavigation";

export default class AddAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectPos: "",
      border_clr: "#ff7070",
      inputwidth: 1,
    };
  }

  onTextFocus(select) {
    this.setState({ selectPos: select, border_clr: "#ff7070", inputwidth: 1 });
  }
  onTextBlur(select) {
    this.setState({ selectPos: select, border_clr: "#ff7070", inputwidth: 1 });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: "white" }}
        >
          <View style={styles.viewMain}>
            <Header
              navigation={this.props.navigation}
              title={"Address"}
              isBack={false}
              isHomeIcon={true}
            />
            <TouchableOpacity>
              <View style={styles.viewCurrentLocation}>
                <Image
                  style={styles.imageCurrent}
                  source={require("../../Image/distance.png")}
                />
                <Text>Use My Current Location</Text>
              </View>
            </TouchableOpacity>
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
                  style={styles.imageIcon}
                  source={require("../../Image/user.png")}
                />
                <TextInput
                  style={styles.textEmail}
                  onFocus={() => this.onTextFocus(1)}
                  onBlur={() => this.onTextBlur(1)}
                  placeholder="PinCode"
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
                  style={styles.textEmail}
                  onFocus={() => this.onTextFocus(2)}
                  onBlur={() => this.onTextBlur(2)}
                  placeholder="House No. Building Name"
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
                  style={styles.textEmail}
                  onFocus={() => this.onTextFocus(3)}
                  onBlur={() => this.onTextBlur(3)}
                  placeholder="Road Name area colony"
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
              <View style={styles.viewCity}>
              <View
                style={[
                  styles.inputViewCity,
                  this.state.selectPos === 4 && {
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
                  style={styles.textEmail}
                  onFocus={() => this.onTextFocus(4)}
                  onBlur={() => this.onTextBlur(4)}
                  placeholder="City"
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
              <View
                style={[
                  styles.inputViewCity,
                  this.state.selectPos === 5 && {
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
                  style={styles.textEmail}
                  onFocus={() => this.onTextFocus(5)}
                  onBlur={() => this.onTextBlur(5)}
                  placeholder="State"
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
            <View
                style={[
                  styles.inputView,
                  this.state.selectPos === 6 && {
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
                  style={styles.textEmail}
                  onFocus={() => this.onTextFocus(6)}
                  onBlur={() => this.onTextBlur(6)}
                  placeholder="LandMark (Optional)"
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
               <View
                style={[
                  styles.inputView,
                  this.state.selectPos === 7 && {
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
                  style={styles.textEmail}
                  onFocus={() => this.onTextFocus(7)}
                  onBlur={() => this.onTextBlur(7)}
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
               <View
                style={[
                  styles.inputView,
                  this.state.selectPos === 8 && {
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
                  style={styles.textEmail}
                  onFocus={() => this.onTextFocus(8)}
                  onBlur={() => this.onTextBlur(8)}
                  placeholder="10-digit mobile number"
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
              <View
                style={[
                  styles.inputView,
                  this.state.selectPos === 9 && {
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
                  style={styles.textEmail}
                  onFocus={() => this.onTextFocus(9)}
                  onBlur={() => this.onTextBlur(9)}
                  placeholder="Alternate phone number (Optional)"
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
              

               <TouchableOpacity  style={styles.btnSignIn}>
               <Text style={styles.txtSign}>SAVE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
