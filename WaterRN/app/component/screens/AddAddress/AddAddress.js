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
    this.state = 
    {}

 
 }





  render() {
    return (
      <View style={{ flex: 1 ,backgroundColor:'red'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: "white" }}
        >
          <View style={styles.viewMain}>

          </View>



        </ScrollView>
        
      </View>
    );
  }
}




