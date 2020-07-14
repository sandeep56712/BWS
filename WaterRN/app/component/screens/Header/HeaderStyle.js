import {
  Platform,Dimensions,
} from "react-native";
var top = 10
var height = Math.round(Dimensions.get('window').height);

if (height >=812) {
    top = 40
}else{
  top = 10
}
export default {
	headerView: {
    /*height:Platform.OS==='ios'? 60:56,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: Platform.OS==='ios'?top:null,*/

  flexDirection:'row',
  backgroundColor:'white',
  height:Platform.OS==='ios'? 60:56,
  padding:8,
  justifyContent:"flex-start",
  backgroundColor:'#ff7070',
  },
  titleView: {
    alignItems: "center", 
    // width: "60%", 
    justifyContent: "center",
    alignSelf: "center"
  },
  backButtonView: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "20%"
  },
  backIcon: {
    resizeMode: "contain",
    width: 25,
    margin: 15,
    height: 25,
    alignSelf: "flex-start"
  },

  menuIconTouch:{
    width:50, 
  height:50,
  alignItems:'center',
  justifyContent:'center',
  },
menuIcon:{
    width:15, 
    height:15,
    tintColor:"black"
},
notificationView:{
    alignSelf:'flex-end',
  justifyContent:'center',
  alignItems:'center',
  width:'10%',
  height:30,
  //marginRight:10
},
notification_icon:{
   width:20,
   height:20,
   //alignSelf:"flex-end"
 },
  titleView: {
    alignItems: "center", 
    width: "60%", 
    justifyContent: "center",
    alignSelf: "center"
  },
   textHeader: {
    color: "black",
    fontSize: 18,   
    alignSelf: "center",
    marginLeft:"10%",
  },
};