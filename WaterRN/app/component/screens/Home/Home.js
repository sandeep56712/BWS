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
import styles from "./Home_Style";
import { NavigationActions, StackActions } from "react-navigation";
import { drawer } from "../../AppNavigation";
import Footer from "../../helper/Footer";
import { SliderBox } from "react-native-image-slider-box";


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?tree", // Network image
      ],
      inspiredCollection: [
        {
          name: "Abc",
          image: require("../../Image/water.png"),
        },
        {
          name: "Abc",
          image: require("../../Image/water.png"),
        },
        {
          name: "Abc",
          image: require("../../Image/water.png"),
        },
        {
          name: "Abc",
          image: require("../../Image/water.png"),
        },
        {
          name: "Abc",
          image: require("../../Image/water.png"),
        },
        {
          name: "Abc",
          image: require("../../Image/water.png"),
        },
      ],
    };
  }

  renderInspiredCollection(item, index) {
    return (
      <TouchableOpacity
        style={{
          width: 130,
          height: 130,
          borderRadius: 20,
          marginLeft: 30,
          // backgroundColor:'red'
        }}
      >
        <Image style={styles.imageInspired} source={item.image} />
      </TouchableOpacity>
    );
  }
  renderWaterHeater(item, index) {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("ProductDetails")}
      >
        <View style={styles.viewWaterHeater}>
          <Image
            style={styles.imageList}
            source={require("../../Image/waterback.png")}
          />
          <View style={styles.viewContent}>
            <Text style={styles.txtShopName}>Shubham Water Supplier</Text>
            <View style={styles.viewsubContent}>
            <Image
                style={styles.imageLocation2}
                source={require("../../Image/user.png")}
              />
            <Text style={styles.txtShopName}>Shubham.......</Text>
          </View>
          <View style={styles.viewsubBottom}>
            <Image
                style={styles.imageLocation2}
                source={require("../../Image/user.png")}
              />
            <Text style={styles.txtShopName}>5</Text>
          </View>

          </View>
          <View style={styles.viewRating}>

            <Text style={styles.txtRating}>4.0</Text>

          </View>

           
        </View>


      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: "white" }}
        >
          <View style={styles.viewMain}>
            <View style={styles.viewChange}>
              <Image
                style={styles.imageLocation}
                source={require("../../Image/location.png")}
              />
              <Text style={styles.txtAddressHome}>Home</Text>
              <TouchableOpacity style={styles.touchChange}>
                <Image
                  style={styles.imageNotification}
                  source={require("../../Image/notification.png")}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.txtAddress}>339-A Gopal Nagar Indore MP</Text>
            <View style={styles.viewSearch}>
              <Image
                style={styles.imageIcon}
                source={require("../../Image/searchIcon.png")}
              />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Search for JAR.., Brand"
                keyboardType="default"
                placeholderTextColor="black"
                autoCapitalize="none"
                style={styles.textInput}
                // onChangeText={(textInputEmail) =>
                //   this.setState({ textInputEmail })
                // }
              />
            </View>
          </View>
          <View style={{width:"90%",marginTop:10,alignSelf:'center'}}> 
          <SliderBox  
            autoplay
            
           ImageComponentStyle={{borderRadius: 5, alignSelf:'center', width: '90%',marginRight:35}}

           images={this.state.images} />
          </View>
          <View style={styles.viewFilter}>
          <Image
                  style={styles.imageFilter}
                  source={require("../../Image/notification.png")}
                />
                <Text style={styles.imageFilter}>Filter</Text>
            <Image
                  style={styles.imageFilter}
                  source={require("../../Image/notification.png")}
                />  
                <Text style={styles.imageFilter}>Filter</Text>
                <Text style={styles.imageFilter}>Filter</Text>
                <Text style={styles.imageFilter}>Filter</Text>
          </View>

           <View style={{ marginTop: 5, marginBottom: 50 }}>
            <FlatList
              style={{ backgroundColor: "white" }}
              data={this.state.inspiredCollection}
              renderItem={({ item, index }) =>
                this.renderWaterHeater(item, index)
              }
              showsHorizontalScrollIndicator={false}
              numRows={2}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ScrollView>
        <View style={styles.bottom}>
          <Footer navigation={this.props.navigation} isSelect={3} />
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
