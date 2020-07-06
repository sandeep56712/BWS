
import React, { Component, createRef } from "react";
//import { createStackNavigator, createAppContainer } from "react-navigation";
//import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

import { NavigationActions,NavigationEvents, StackActions,StackNavigator  } from "react-navigation";

import ScalingDrawer from "react-native-scaling-drawer";

import NavigationService from "./NavigationService";
import Splash from './screens/Splash/Splash'
import Login from './screens/Login/Login'
import ForgotPassword from './screens/ForgotPassword/ForgotPassword'
import Register from './screens/Register/Register'
import OtpVerification from './screens/OtpVerification/OtpVerification'
import Home from './screens/Home/Home'
import Account from './screens/Account/Account'
import ProductDetails from './screens/ProductDetails/ProductDetails'
import Cart from './screens/Cart/Cart'
import MyOrder from './screens/MyOrder/MyOrder'
import AddAddress from './screens/AddAddress/AddAddress'
import LeftMenu from "./LeftMenu";





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
      screen: Home
    }, 
    ProductDetails: {
      screen: ProductDetails
    },
     Cart: {
      screen: Cart
    },
    Account: {
      screen: Account
    },
     MyOrder: {
      screen: MyOrder
    },
    AddAddress: {
      screen: AddAddress
    },
    
},
  {
    headerMode: "none",
    mode: "modal",
    initialRouteName: "Splash", //Splash
   
  }
);
const App = createAppContainer(AppStackAllScreen);

export const drawer = createRef();

const defaultScalingDrawerConfig = {
  scalingFactor: 0.8,
  minimizeFactor: 0.5,
  swipeOffset: 20
};
 // 8109908699
export default class AppNavigation extends Component {
//navigation={this.props.navigation}
render() {
 return (
  <ScalingDrawer
        ref={drawer}
        content={
          <LeftMenu  drawer={drawer} />
        }
        {...defaultScalingDrawerConfig}
        onClose={() => console.log("close")}
        onOpen={() => console.log("open")}>
        <App   ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }} />
      </ScalingDrawer>
      );
    }

}