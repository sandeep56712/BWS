import React, { Component } from 'react';
import { Text, View,SafeAreaView,TouchableOpacity,Image,TextInput,ScrollView,FlatList } from 'react-native';
import Header from "../Header/Header";
import styles from "./ProductDetails_Style";
import { NavigationActions, StackActions } from "react-navigation";

export default class ProductDetails extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	inspiredCollection:[
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

  renderInspiredCollection(item, index) {
    return (
     <TouchableOpacity 
        style={{
              width: 110,
              height: 150,
              borderRadius:20,
              marginLeft:30,
             // backgroundColor:'red'
            }}>
        
          <Image 
                  style={styles.imageInspired}
                  source={item.image}
                />
          
        </TouchableOpacity>
        
      
    );
  } 
   renderWaterHeater(item, index) {
    return (
     <TouchableOpacity 
        style={{
              width: 160,
              height: 180,
              borderRadius:20,
              marginLeft:30,
             // backgroundColor:'red'
            }}>
        
          <Image 
                  style={styles.imageInspired}
                  source={ require("../../Image/waterback.png")}
                />
          
        </TouchableOpacity>
        
      
    );
  }


  render() {
    return (
      <View style={{ flex: 1, }}>
          <Header
            navigation={this.props.navigation}
            title={"HOME"}
            isBack={"false"}
            isNotification={"false"}
          />
         <ScrollView>

          <View style={styles.viewChange}>
            <Text style={styles.txtAddress}>339-A Gopal Nagar</Text>
            <TouchableOpacity style={styles.touchChange}>
             <Text style={styles.btnChange}>Change</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewSearch}>
           <Image
                  style={styles.imageIcon}
                  source={require("../../Image/searchIcon.png")}
                />
              <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Search for water......"
                  keyboardType="default"
                  placeholderTextColor='black'
                  autoCapitalize="none"
                  style={styles.textInput}
                  // onChangeText={(textInputEmail) =>
                  //   this.setState({ textInputEmail })
                  // }
              />  
          </View>
          <Text style={styles.txtCollection}>GET INSPIRED BY COLLECTIONS</Text>
            <View style={{marginTop:20}}>
               <FlatList
	            style={{ backgroundColor: "white" }}
	            data={this.state.inspiredCollection}
	            renderItem={({ item, index }) =>
	              this.renderInspiredCollection(item, index)
	            }
	            showsHorizontalScrollIndicator={false}
	            horizontal={true}
	            numRows={2}
	            keyExtractor={(item, index) => index.toString()}
              />
            </View>
          <Text style={styles.txtCollection}>WATER HEATER AND.......</Text>
          <View style={{marginTop:20}}>
               <FlatList
	            style={{ backgroundColor: "white" }}
	            data={this.state.inspiredCollection}
	            renderItem={({ item, index }) =>
	              this.renderWaterHeater(item, index)
	            }
	            showsHorizontalScrollIndicator={false}
	            horizontal={true}
	            numRows={2}
	            keyExtractor={(item, index) => index.toString()}
              />
            </View>
    </ScrollView>

      </View>

    );
  }
}
