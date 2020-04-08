import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,StatusBar,
  View,TouchableOpacity,Image,
} from 'react-native';

import styles from './Header.style';
import { Dimensions } from 'react-native'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const APPBAR_HEIGHT = hp('10%')
let deviceHeight = Dimensions.get('window').height

	/*if (deviceHeight == 812) 
    {
      APPBAR_HEIGHT = 70
    }*/
export default class Header extends Component {
	
	
	render(){
		console.log('device height---'+deviceHeight)
		const title=this.props;
		const isBack=this.props.isBack;
		const isNotification=this.props.isNotification;
		const isSetting=this.props.isSetting;
		console.log('header is back='+isBack);
		console.log('title='+title);
		console.log('app bar height =='+APPBAR_HEIGHT);
		   
  let button = null;
  let search=null;
  if(isSetting=='true'){
  				console.log('inside settings-----------------------------');
			search=<TouchableOpacity onPress={()=>this.props.navigation.navigate('Settings')}>	
				<View style={{marginRight:15,marginLeft:15	}}>
			<Image style={styles.icon} source={require('../../Image/settings_icon.png')} />
				</View>
			</TouchableOpacity>	
		}else{
			console.log('inside search-----------------------------');
			search=
				<TouchableOpacity onPress={()=>this.props.navigation.navigate('Search')}>	
				<View style={{marginRight:15,marginLeft:15	}}>
			<Image style={styles.icon} source={require('../../Image/search.png')} />
				</View>
			</TouchableOpacity>	
		}
    if (isBack=='false') {
		       button = <TouchableOpacity onPress={()=>{this.props.navigation.openDrawer()}} >
           <Image style={styles.menuIcon} source={require('../../Image/menu.png')}/>
        </TouchableOpacity> 
    } 
		   else {
		 button = <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} >
			 <View style={{marginLeft:5,padding:10,justifyContent:'center',alignItems:'center',}}>
           <Image style={styles.backIcon} source={require('../../Image/back_button.png')}/>
			 </View>
        </TouchableOpacity>		
		
    }
	let show_notification=null;
	if(isNotification=='true')
	{
	show_notification=<View style={{alignItems:'center',flexDirection:'row'}}>
		<TouchableOpacity style={{marginLeft:-30}} onPress={()=>this.props.navigation.navigate('Notification')}>
			
				<Image style={styles.icon} source={require('../../Image/notification.png')} />
		
		</TouchableOpacity>	
			
			{search}								   
			
		</View>
	}else{
		show_notification=null;
	}
		return(
			<View style={{height:APPBAR_HEIGHT,backgroundColor:'white',
				alignItems:'center',
				flexDirection:'row'}}>
			{button}	
			<View style={{alignItems:'center',marginLeft:'2%',width:'80%',marginRight:'2%',justifyContent:'center'}}>
				<Text style={styles.textHeader}>{this.props.title}</Text>
			</View>
			{show_notification}
				</View>
		);
	}
}