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
import styles from "./MyOrder_Style";
import { NavigationActions, StackActions } from "react-navigation";
import { drawer } from "../../AppNavigation";
import Footer from "../../helper/Footer";
import { SliderBox } from "react-native-image-slider-box";

export default class MyOrder extends Component {
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

  renderOrder(item, index) {
    return (
      <TouchableOpacity
      // onPress={() => this.props.navigation.navigate("ProductDetails")}
      >
        <View style={styles.viewList}>
          <Text style={styles.txtDate}>july 16, 2020 8:04 PM</Text>
          <View style={styles.viewScection}>
            <View style={styles.viewOrder}>
              <Text>Order Id</Text>
              <Text style={styles.txtOrder}>#79798</Text>
            </View>
            <View style={styles.viewOrder}>
              <Text>Order Id</Text>
              <Text style={styles.txtOrder}>Order Id</Text>
            </View>
            <View style={styles.viewOrder}>
              <Text>Order Id</Text>
              <Text style={styles.txtOrder}>Order Id</Text>
            </View>
          </View>
          <View style={styles.viewUnderLine} />
          <View style={styles.viewBottomOrder}>
            <TouchableOpacity>
              <View style={styles.subView}>
                <Image
                  style={styles.imageViewOrder}
                  source={require("../../Image/distance.png")}
                />
                <Text>View Order </Text>
                <View style={styles.viewVertical} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.subView}>
                <Image
                  style={styles.imageViewOrder}
                  source={require("../../Image/distance.png")}
                />
                <Text>View Order </Text>
                <View style={styles.viewVertical} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.subView}>
                <Image
                  style={styles.imageViewOrder}
                  source={require("../../Image/distance.png")}
                />
                <Text>View Order </Text>
              </View>
            </TouchableOpacity>
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
            <FlatList
              style={{ backgroundColor: "white" }}
              data={this.state.inspiredCollection}
              renderItem={({ item, index }) => this.renderOrder(item, index)}
              showsHorizontalScrollIndicator={false}
              numRows={2}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ScrollView>
        <View style={styles.bottom}>
          <Footer navigation={this.props.navigation} isSelect={2} />
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
