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
import styles from "./Account_Style";
import { NavigationActions, StackActions } from "react-navigation";
import { drawer } from "../../AppNavigation";
import Footer from "../../helper/Footer";


export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
  }

 
 }

  render() {
    return (
      <View style={{ flex: 1 ,backgroundColor:'red'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: "white" }}
        >
          <View style={styles.viewMain}>
            <View style={styles.viewProfile}>
              <Image
            style={styles.imageProfile}
            source={require("../../Image/waterback.png")}
          />
          <Text style={styles.txtName}>Shubham verma</Text>
            </View>
          
          </View>
          <View style={styles.viewMain_2}>
            
          </View>



        </ScrollView>
        <View style={styles.bottom}>
          <Footer navigation={this.props.navigation} isSelect={5} />
        </View>
      </View>
    );
  }
}



// <View style={{ marginTop: 20 }}>
//             <FlatList
//               style={{ backgroundColor: "white" }}
//               data={this.state.inspiredCollection}
//               renderItem={({ item, index }) =>
//                 this.renderInspiredCollection(item, index)
//               }
//               showsHorizontalScrollIndicator={false}
//               horizontal={true}
//               numRows={2}
//               keyExtractor={(item, index) => index.toString()}
//             />
//           </View>
