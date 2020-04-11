import React, { Component } from "react";

import {
  ScrollView,
  StyleSheet,
  View,
  Animated,
  Text,
  Platform,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight
} from "react-native";
import styles from "./ProductDetails_Style";
const Header_Maximum_Height = 150;
const Header_Minimum_Height = 70;

export default class ProductDetails extends Component<{}> {
  constructor() {
    super();
    this.AnimatedHeaderValue = new Animated.Value(0);
     this.state = {
      quantity:"ADD",
      dataList:[
         { 
          name:"Abc",image:require("../../Image/water.png")
         },
        {  
          name:"Abc",image:require("../../Image/water.png")
         },
         {  
          name:"Abc",image:require("../../Image/water.png")
         }, 
         { 
          name:"Abc",image:require("../../Image/water.png")
         },
        {  
          name:"Abc",image:require("../../Image/water.png")
         },
         {  
          name:"Abc",image:require("../../Image/water.png")
         },

      ]
    }
  }

 onPlus(){

   // this.setState({quantity:})
 } 
 onMinus(){

 }
renderItemsData(item, index) {
    return (
     <TouchableOpacity >
          <View style={styles.viewRednderList}>
            <View style={styles.viewListContent}>
            <Text style={styles.txtProductName}>Bisleri-1 Ltr</Text>
            <View style={styles.viewAdd}>
             <TouchableOpacity>
             <Text style={styles.txtPlus}> - </Text>
             </TouchableOpacity>
             <Text style={styles.txtAdd}>{this.state.quantity}</Text>
             <TouchableOpacity>
             <Text style={styles.txtPlus}>+</Text>
             </TouchableOpacity>
            </View>
            </View>
            <Text style={styles.txtDesc}>The 1 Ltr pack is ideal</Text> 
            <View style={styles.viewPrice}>
            <Text style={styles.txtPrice}>{'\u20B9'}</Text> 
            <Text style={styles.txtPrice}>100.00</Text> 
            </View>
          </View>
        </TouchableOpacity>
        
      
    );
  }

  render() {
    const AnimateHeaderBackgroundColor = this.AnimatedHeaderValue.interpolate({
      inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
      outputRange: ["#009688", "#00BCD4"],
      extrapolate: "clamp",
    });

    const AnimateHeaderHeight = this.AnimatedHeaderValue.interpolate({
      inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
      outputRange: [Header_Maximum_Height, Header_Minimum_Height],
      extrapolate: "clamp",
    });

    return (
      <View style={styles.MainContainer}>
        
        <Animated.View
          style={[
            styles.HeaderStyle,
            {
              height: AnimateHeaderHeight,
              backgroundColor: AnimateHeaderBackgroundColor,
            },
          ]}
        >
            <ImageBackground 
                  style={styles.imageTop} resizeMode='cover'
                  source={ require("../../Image/waterback.png")}
                >
                <TouchableOpacity onPress={() =>this.props.navigation.goBack()} style={styles.imageTouch}>
                <Image 
                  style={styles.imageBack}
                  source={ require("../../Image/back_button.png")}
                />
                </TouchableOpacity>
                </ImageBackground>
        </Animated.View>
         <ScrollView 
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingTop: Header_Maximum_Height }}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.AnimatedHeaderValue } } },
          ])}
        >
         <View style={styles.viewContent}>
            <View style={styles.viewName}>
             <Text style={styles.txtName}>Shubham Water Supplier</Text>
              <View style={styles.viewRating}>
              <Text style={styles.txtRating}>5.0</Text>
              </View>
            </View>
             <Text style={styles.txtAddress}>Bhel Piplani</Text>
             <Text style={styles.txtTopic}>Today's Exclusive </Text>
             
             <View style={{marginTop:20,marginBottom:150}}>
               <FlatList
              style={{ backgroundColor: "white" }}
              data={this.state.dataList}
              renderItem={({ item, index }) =>
                this.renderItemsData(item, index)
              }
              showsHorizontalScrollIndicator={false}
             
              numRows={2}
              keyExtractor={(item, index) => index.toString()}
              />
            </View>
         </View>
        </ScrollView>
      </View>
    );
  }
}


