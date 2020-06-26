import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  Text,
  Alert,
  StyleSheet,
  ScrollView,
  Image,
  Platform
} from "react-native";
import { withNavigation } from 'react-navigation';
import NavigationService from "./NavigationService";
import {
  NavigationActions,
  StackActions,
  NavigationEvents,StackNavigator 
} from "react-navigation"
import AsyncStorage from "@react-native-community/async-storage";

export default class LeftMenu extends Component {
  constructor(props) {
    super(props);
     this.redirectScreen = this.redirectScreen.bind(this);
    this.state = {
      enableScrollViewScroll: true,
      selectedIndex: 0,    
      refresh: false,
      currentList: [],
      index: 0
    };
  }
 _navigateTo = route => {
    const resetAction = StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: route })]
    });
    this.props.navigation.dispatch(resetAction);
  };
  redirectScreen=(index)=>{   

       if (index == 0) {
        this.setState({ selectedIndex: index });
        
        this.props.drawer.current.close();
         NavigationService.navigate("Home");
        this.props.drawer.current.close();

      } else if (index == 1) {
        this.setState({ selectedIndex: 0});
        //navigate('WalletScreen')
         NavigationService.navigate("ProductDetails")
        this.props.drawer.current.close();
      } else if (index == 2) {
        this.setState({ selectedIndex: 0 });
        NavigationService.navigate("Cart");
        this.props.drawer.current.close();
      } else if (index == 3) {
        this.setState({ selectedIndex: 0 });
        NavigationService.navigate("EditProfile");
        this.props.drawer.current.close();
      } else if (index == 4) {
        this.setState({ selectedIndex: 0 });
        NavigationService.navigate("AboutUs");
        this.props.drawer.current.close();
      } else if (index == 5) {
        this.setState({ selectedIndex: 0 });
       NavigationService.navigate("PrivacyPolicy");
        this.props.drawer.current.close();
      } else if (index == 6) {
        this.setState({ selectedIndex: 0 });
       NavigationService.navigate("TermsCondition");
        this.props.drawer.current.close();
      } 
      else if (index == 7) {
        this.setState({ selectedIndex: 0 });
        this.logout();
        // NavigationService.navigate("Login");
      } 
  }
  //                        <View style={this.state.selectedIndex==0?{width:8,height:1,backgroundColor:"B45992"}:{}} />

async logout()
{
  console.log("Logout calling------>")
      var user_data = {
          user_name: "",
          user_email: "",
          user_phone: "",
          user_type: "",
          loggedInStatus:"",
        };
    await AsyncStorage.setItem("userData", JSON.stringify(user_data));
        NavigationService.navigate("Login");
        this.props.drawer.current.close();
  
}

  render(){
     const { navigation:navigate } = this.props;
    return(
          <View style={{flex:1,backgroundColor:'#FFFFFF',}}>
           <ScrollView style={styles.scrollContainer}>
              <View style={styles.scrollContainerView}>
                <View style={styles.userContainerView}>
                   <Image
                      style={styles.userImage}
                      source={require("./Image/dummy_user.png")}
                    />
                     <Text style={styles.userText}>
                       TEST
                     </Text>
                </View>
                <View style={{backgroundColor:"grey",height:1,width:"50%",borderRadius:10,margin:10}}/>
                  <View style={styles.listContainerView}>
                    <TouchableOpacity onPress={() => this.redirectScreen(0)}>
                      <View
                        style={[
                          styles.rowBgContainer,
                        ]} >
                       
                     <View style={{backgroundColor:"#0f83cc",height:2,width:10,borderRadius:10,margin:10}}/>

                           <Text style={this.state.selectedIndex==0?[styles.rowText,{color:"#0f83cc",marginBottom:10}]:[styles.rowText,{color:"#291A4B",marginLeft:45,marginBottom:10}]}>
                              Home
                          </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.redirectScreen(1)}>  
                       <View
                        style={[
                          styles.rowBgContainer,
                        ]} >
                           <Text style={[styles.rowText,{color:"#291A4B",marginLeft:45,marginBottom:10}]}>
                              Product Details
                          </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.redirectScreen(2)}>  
                       <View
                        style={[
                          styles.rowBgContainer,
                        ]} >
                           <Text style={[styles.rowText,{color:"#291A4B",marginLeft:45,marginBottom:10}]}>
                              Cart
                          </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.redirectScreen(3)}>  
                       <View
                        style={[
                          styles.rowBgContainer,
                        ]} >
                           <Text style={[styles.rowText,{color:"#291A4B",marginLeft:45,marginBottom:10}]}>
                              Profile
                          </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.redirectScreen(4)}>  
                       <View
                        style={[
                          styles.rowBgContainer,
                        ]} >
                           <Text style={[styles.rowText,{color:"#291A4B",marginLeft:45,marginBottom:10}]}>
                             About Us
                          </Text>
                      </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this.redirectScreen(5)}>
                       <View
                        style={[
                          styles.rowBgContainer,
                        ]} >
                           <Text style={[styles.rowText,{color:"##291A4B",marginLeft:45,marginBottom:10}]}>
                             Privacy Policy
                          </Text>
                      </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this.redirectScreen(6)}>
                      <View
                        style={[
                          styles.rowBgContainer,
                        ]} >
                           <Text style={[styles.rowText,{color:"#291A4B",marginLeft:45,marginBottom:40}]}>
                             Terms & Condition
                          </Text>
                      </View>
                    </TouchableOpacity>  
                     <TouchableOpacity onPress={() => this.redirectScreen(7)}>
                      <View
                        style={[
                          styles.rowBgContainer,
                        ]} >
                           <Text style={[styles.rowText,{color:"#291A4B",marginLeft:45,marginBottom:10}]}>
                            Logout
                          </Text>
                      </View>
                    </TouchableOpacity>  
                  </View>
              </View>  
           </ScrollView>
          </View>
      );
  }
}
const styles = StyleSheet.create({
scrollContainer: {
    width: "100%",
    height: "100%"
  },
  scrollContainerView: {
    marginBottom: 20
  },
  userContainerView: {
    width: "30%",
    alignSelf: "flex-start",
    alignItems: "center",
    marginTop: 40,
    marginLeft:20,
    justifyContent: "center"
  },
   userImage: {
   width: 80,
    height: 80,
   // borderRadius: 20,
    resizeMode: "stretch",

    /*resizeMode:'stretch',   
  flexDirection:'row',
  height:100,   width:80,
  alignItems:'center',
  justifyContent:'center',*/
  },
   userText: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
    width:"70%",
    textAlign:"left",
    color: "#0f83cc", 
  },
  listContainerView: {
    flexDirection: "column",
    marginTop: "5%",
    ...Platform.select({
      ios: {
        // width: 0,
      },
      android: {
        //width: "50%"
      }
    }),
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "flex-start"
  },
   rowBgContainer: {
    borderRadius: 12,
   // padding: 10,
    //backgroundColor: "#56c219",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
    marginTop:15,
    //margin:8
   // marginTop: 20
  },
  rowText: {
    marginLeft: 10,
    color: "#291A4B",
    width: "80%",
    fontSize: 20,
  }
  });