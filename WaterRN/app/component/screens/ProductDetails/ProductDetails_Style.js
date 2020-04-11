export default {


MainContainer: {
    flex: 1,
    paddingTop: Platform.OS == "ios" ? 20 : 0,
  },
  HeaderStyle: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    // top: (Platform.OS == 'ios') ? 40 : 0,
  },

  HeaderInsideTextStyle: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },

  TextViewStyle: {
    textAlign: "center",
    color: "#000",
    fontSize: 18,
    margin: 5,
    padding: 7,
    backgroundColor: "#ECEFF1",
  },
  imageTop:{
  	// marginTop:50,
  	height:'100%',
  	width:'100%',
  },
  viewContent:{
  	backgroundColor:'white',
  	height:600,
  	// flex:1,
  	width:'100%',
  	alignSelf:'center',
  	borderRadius:20,
  	marginTop:-40
  },
  viewName:{
  	flexDirection:'row',
  	marginTop:20,
  	width:'90%',
  	alignSelf:'center',
  },
  viewRating:{
 marginLeft:130,
 height:30,
 width:40,
 backgroundColor:'#0f83cc',
 borderRadius:5,
 alignItem:'center',
 alignSelf:'flex-end',
 justifyContent:'center',
},
txtRating:{
 textAlign:'center',
 color:'white',
 fontSize:14,
 // fontWeight:'bold',

},
txtName:{
	fontSize:16,
    fontWeight:'bold',
},
txtAddress:{
	fontSize:16,
	width:'90%',
	alignSelf:'center',
	color:'darkgrey',
},
txtTopic:{
	fontSize:18,
	width:'90%',
	alignSelf:'center',
	color:'black',
	marginTop:30,
	fontWeight:'bold',
},
viewRednderList:{
	height:90,
	width:'90%',
	backgroundColor:'white',
	marginTop:10,
	alignSelf:'center',
},
viewListContent:{
	flexDirection:'row',
	// backgroundColor:'red',

},
viewAdd:{
	flexDirection:'row',
	height:35,
	width:100,
	borderRadius:10,
	backgroundColor:'white',
	borderWidth:1,
	borderColor:'grey',
},
txtProductName:{
 width:'70%',
 color:'black',
 fontSize:16,
 fontWeight:'bold',

},
txtAdd:{
	alignSelf:'center',
	marginLeft:5,
	width:30,
},
txtPlus:{
	alignSelf:'center',
	marginLeft:8,
	fontSize:25,
	color:'grey',
},
txtDesc:{
	marginTop:-10,

},
txtPrice:{
	marginTop:10,
    fontWeight:'bold',
    fontSize:14,
    marginLeft:5,
},
viewPrice:{
	flexDirection:'row',
},
imageBack:{
	height:20,
	width:20,
	alignSelf:'center',
	marginTop:24,
	// backgroundColor:'red',
	tintColor:'black',

},
imageTouch:{
	height:100,
	width:30,
	marginLeft:10,
	// backgroundColor:'red',
	// marginTop:20,


},

}