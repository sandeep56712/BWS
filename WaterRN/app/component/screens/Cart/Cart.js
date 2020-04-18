import React, { Component } from 'react';
import { Text, View,SafeAreaView,TouchableOpacity,Image,TextInput,ScrollView,FlatList } from 'react-native';
import styles from "./Cart_Style";
import { NavigationActions, StackActions } from "react-navigation";

export default class Cart extends Component {
	constructor(props) {
    super(props);
    this.state = {
 
    }
}




  render() {
    return (
      <View style={{ flex: 1, }}>
         <View style={styles.header}>
          <TouchableOpacity>
             <Image 
                  style={styles.imageback}
                  source={require("../../Image/arrow_back.png")}
                />
          </TouchableOpacity>
           <Text style={styles.txtCart}>Cart</Text>
         </View>
         <ScrollView>
          <View style={styles.viewMain}>
           <Text style={styles.txtHeader}>Add a tip for your rider</Text>
             
             <View style={styles.viewoffer}>
             <Text style={styles.txtOffer}>KESH0859-Get Rs. 100 off!</Text>
             <View style={styles.viewOff}>
             <Image 
                  style={styles.imageback}
                  source={require("../../Image/right_tic.png")}
                />
                <Text style={styles.txtpromo}>Promo code applied please ensure that you pay online to avail the discount</Text>
                <Text style={styles.txtofferPrice}>-{'\u20B9'} 100</Text>
             </View>
             <TouchableOpacity style={styles.touchRemove}>
             <Text style={styles.txtRemove} >REMOVE</Text>
             </TouchableOpacity>
             </View>
             <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',}}>
                <View style={styles.viewTotal}>
                  <Text style={styles.txtItemTotal}>Item Total </Text>
                  <Text style={styles.txtPriceTotal}>Taxes & charges </Text>
                  </View>
                  <View style={styles.viewTotal}>
                  <Text style={styles.txtItemTotal}>{'\u20B9'}  522.00 </Text>
                  <Text style={styles.txtPriceTotal}>{'\u20B9'} 522.00 </Text>
                  </View>
             </View> 
             
             
            

             <View style={styles.viewAddress}>

               <Text style={styles.waterTo}>DELIVERY WATER TO</Text>
               <View style={styles.viewAdd}>
               <Image 
                  style={styles.imageTic}
                  source={require("../../Image/right_tic.png")}
                />
                <Text style={styles.txtAdd}>S-19 South gadra khedi</Text>
                <TouchableOpacity style={styles.changeTouch}>
                 <Text style={styles.txtChange}>CHANGE</Text>
                </TouchableOpacity>
               </View>
               
             </View>
             <TouchableOpacity >
                 <View style={styles.viewPlace}>
                  <Text style={styles.txtPlace}>Place Order</Text>
                  <Image 
                  style={styles.imagGoArrow}
                  source={require("../../Image/goahead_arrow.png")}
                />
                 </View>
                 <Text style={styles.txtnext}>Add address at next stop</Text>

               </TouchableOpacity>
            </View>
    </ScrollView>

      </View>

    );
  }
}
