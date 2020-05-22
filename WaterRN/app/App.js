import React, { Component ,createRef} from "react";
import {
  Platform,
  StyleSheet,
  FlatList,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Modal,
  ImageBackground,
  Image,
  ScrollView,
  Alert,  
  StatusBar,
  
} from "react-native";

import { createAppContainer,createDrawerNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AppNavigation from "./component/AppNavigation"

import NavigationService from "./component/NavigationService";
import AsyncStorage from "@react-native-community/async-storage";
import Amplify from "aws-amplify";

import awsConfig from './aws_file';

import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure(awsConfig);


const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);


export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    }
   render() {
    console.log("connected is------->",Amplify.configure(awsConfig))
    return (
      <View style={{ flex: 1 }}> 
       <MyStatusBar backgroundColor="#0f83cc" barStyle="light-content" />  
          <AppNavigation/>      
        
      </View>
    );
  }
}
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor:'#013220',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#013220',
  },
});


