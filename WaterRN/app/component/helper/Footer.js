import React, { Component } from 'react';
import {  
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

export default class Footer extends Component {
	
  constructor(props){
    super(props); 	
  }  		
  
   _navigateTo = route => {
    const resetAction = StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: route })]
    });
    this.props.navigation.dispatch(resetAction);
  };
	
	render(){
		const {isSelect} = this.props;
		return(
		<View>		
		    <View style={s.viewLine} />			
			<View style={s.footerParentView}>			
             <TouchableOpacity style={s.footerView} onPress={()=>{this._navigateTo("Home")}}>
                 <Image style={s.footerIcon} source={(isSelect===1) ? require('../images/home.png') : require('../images/home.png')} />					 
			    <Text style={[(isSelect===1) ? s.footerTextSelectView : s.footerTextView]}>Home</Text>
				</TouchableOpacity>
				<TouchableOpacity style={s.footerView} onPress={()=>{this._navigateTo("MyOrder")}}>		
				<Image style={[(isSelect===2) ? s.footerIconSelected : s.footerIcon]} source={require('../images/order.png')}/>	
				<Text style={[(isSelect===2) ? s.footerTextSelectView : s.footerTextView]}>Order</Text>
				</TouchableOpacity>
				<TouchableOpacity style={s.footerView} onPress={()=>{this._navigateTo("Home")}}>		
				 <Image style={[(isSelect===3) ? s.footerIconSelected : s.footerIcon]} source={require('../images/category.png')}/>	
				<Text style={[(isSelect===3) ? s.footerTextSelectView : s.footerTextView]}>Category</Text>
				</TouchableOpacity>
				<TouchableOpacity style={s.footerView} onPress={()=>{this._navigateTo("Home")}}>		
				 <Image style={s.footerIcon} source={(isSelect===4) ? require('../images/cart.png') : require('../images/cart.png')} />		
				<Text style={[(isSelect===4) ? s.footerTextSelectView : s.footerTextView]}>Cart</Text>
				</TouchableOpacity>
				<TouchableOpacity style={s.footerView} onPress={()=>{this._navigateTo("Account")}}>		
				 <Image style={[(isSelect===5) ? s.footerIconSelected : s.footerIcon]} source={require('../images/profile.png')}/>	
				<Text style={[(isSelect===5) ? s.footerTextSelectView : s.footerTextView]}>Profile</Text>
				</TouchableOpacity>
			</View>	          
        </View>				
		);
	}
}

var s = StyleSheet.create({
   footerParentView: {
     height:70,
     backgroundColor:'#FFFFFF',
     alignItems:'center',
     flexDirection:'row',
	   justifyContent:'center',
  },  
  footerView: {
    flex:1,
	justifyContent:'center',
    alignItems:'center', 	
  },
   footerTextView: {
    fontSize:10,  
	color:'#8C97AA',
	textAlign:'center',
  marginTop:5,
	// fontFamily:'Lato-Regular'
  }, 
  footerTextSelectView: {
  fontSize:10,  
	color:'#E6214A',
	textAlign:'center',
  marginTop:5,
  },
  footerIcon:{
     resizeMode:'contain',
     height:26,
     width:26,
  }, 
  footerIconSelected:{
     resizeMode:'contain',
     height:26,
     width:26,
	   tintColor:'#E6214A',
  },
  viewLine:{
	  borderBottomColor: '#8C97AA',
    borderBottomWidth: 1,
},
});
