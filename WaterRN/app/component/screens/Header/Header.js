import React, { Component } from "react";

import {
  Platform,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  Alert,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import styles from "./HeaderStyle";
import { drawer } from "../../AppNavigation";

const APPBAR_HEIGHT = 40;
let deviceHeight = Dimensions.get("window").height;
import { NavigationActions,NavigationEvents, StackActions } from "react-navigation";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
   openDrawer(){
     if(drawer != null && drawer.current != null){
    this.props.navigation.goBack();
       // drawer.current.open()
     }
   }
	render(){
    const title = this.props;
    const isBack = this.props.isBack;
    const isNotification = this.props.isNotification;
    var notificationView=null;
    var leftIcon=null;
       if (isNotification) {
      notificationView = (
        <TouchableOpacity style={styles.notificationView}>
            <Image resizeMode={"contain"} style={styles.notification_icon}  source={require("../../Image/notification.png")} />         
          </TouchableOpacity>
      )
       if(isBack){
          leftIcon=
           <TouchableOpacity style={styles.menuIconTouch} onPress={() => this.openDrawer()}>
            <Image
              tintColor="white"
              source={require("../../Image/arrow_back.png")}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
       }else{
          leftIcon= 
          <TouchableOpacity style={styles.menuIconTouch} onPress={() => this.openDrawer()}>
            <Image
              tintColor="white"
              source={require("../../Image/arrow_back.png")}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
       }
    }
	return(		
    <View style={styles.headerView}>
    
           <TouchableOpacity style={styles.menuIconTouch} onPress={() => this.openDrawer()}>
            <Image
              
              source={require("../../Image/arrow_back.png")}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
           
          <Text style={styles.textHeader}>{this.props.title}</Text>
          
          {notificationView}
       </View>
	);
	}
}
/*<View style={styles.headerView}>
      {backButton}
        <View style={styles.titleView}>
          <Text style={styles.textHeader}>{this.props.title}</Text>
        </View>
    </View>*/