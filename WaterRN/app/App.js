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

import { createStackNavigator, createAppContainer,createDrawerNavigator } from "react-navigation";
import NavigationService from "./component/NavigationService";
import AsyncStorage from "@react-native-community/async-storage";

import SideMenu from "./component/screens/NavigationDrawer/SideMenu";

import Splash from './component/screens/Splash/Splash'
import Login from './component/screens/Login/Login'
import ForgotPassword from './component/screens/ForgotPassword/ForgotPassword'
import Register from './component/screens/Register/Register'
import OtpVerification from './component/screens/OtpVerification/OtpVerification'
import Home from './component/screens/Home/Home'
import ProductDetails from './component/screens/ProductDetails/ProductDetails'

// Side menu

const drawerNavigators = createDrawerNavigator(
  {
    Home: {
      screen: Home,
    },

  },

  {
    contentComponent: (props) => (
      <SideMenu navigation={props.navigation} drawerProps={{ ...props }} />
    ),
  }
);

// Side menu



const AppStackAllScreen = createStackNavigator(
  {
    Splash: {
      screen: Splash
    },
     Login: {
      screen: Login
    }, 
     ForgotPassword: {
      screen: ForgotPassword
    },
     Register: {
      screen: Register
    },
     OtpVerification: {
      screen: OtpVerification
    },
    Home: {
      screen: drawerNavigators
    }, 
    ProductDetails: {
      screen: ProductDetails
    },
    
},
  {
    headerMode: "none",
    mode: "modal",
    initialRouteName: "Splash", //Splash
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);
const NavigationScreen = createAppContainer(AppStackAllScreen);





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
    return (
      <View style={{ flex: 1 }}> 
       <MyStatusBar backgroundColor="#0f83cc" barStyle="light-content" />  
        <NavigationScreen
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
    
        
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


