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
import styles from "./ShowAddressList_Style";
import { NavigationActions, StackActions } from "react-navigation";
import { drawer } from "../../AppNavigation";

export default class ShowAddressList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectPos: "",
      border_clr: "#ff7070",
      inputwidth: 1,
      addList: ["","","",""],
    };
  }

  onTextFocus(select) {
    this.setState({ selectPos: select, border_clr: "#ff7070", inputwidth: 1 });
  }
  onTextBlur(select) {
    this.setState({ selectPos: select, border_clr: "#ff7070", inputwidth: 1 });
  }
renderAddList(item, index) {
    return (
      <TouchableOpacity
        //onPress={() => this.click(index)}
      >
      <View style={styles.viewMainlist}>
          <View style={styles.viewList}>
             <View style={styles.viewName}>
               <Text>Sandeep singh</Text>
               <View style={styles.viewHome}>
               <Text>Home</Text>
               </View>               
             </View>
               <Text>Address 1----------------</Text>
               <Text>Address 2==================</Text>
               <Text>Address 3..............</Text>

          </View>
        </View>
      </TouchableOpacity>
    );
  }


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: "white" }}
        >
          <View style={styles.viewMain}>
            <Header
              navigation={this.props.navigation}
              title={"My Address"}
              isBack={false}
              isHomeIcon={true}
            />
            <TouchableOpacity>
              <View style={styles.viewCurrentLocation}>
                <Image
                  style={styles.imageCurrent}
                  source={require("../../Image/distance.png")}
                />
                <Text>Add New Address</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.viewInput}>
             <Text>10 SAVED ADDRESS</Text>
             </View>
             <View style={{ marginTop: 15,}}>
              <FlatList
              style={{ backgroundColor: "white" }}
              data={this.state.addList}
              renderItem={({ item, index }) =>
                this.renderAddList(item, index)
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
