import React, { Component,PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,Dimensions,Alert,
  ScrollView,ActivityIndicator,SafeAreaView
} from 'react-native';
import {NavigationActions,StackActions} from 'react-navigation';
import styles from './SideMenu.style';

import AsyncStorage from "@react-native-community/async-storage";

class SideMenu extends Component {
	constructor(props) {
    super(props);		
		this.state = {
			 isLogin:'0',
			 userType:'',
			 loginType:'',
			 userName:'',
			 profileImage:'https://facebook.github.io/react-native/docs/assets/favicon.png',
			// profileImage:require('../../Image/users.png'),
			 userData:[],
			 user_id:'',
			 loading:false,
		 }
	}	

	 componentWillMount(){
   console.log('side menu componentWillMount call');
   
		

			
	}
	componentWillUpdate(){
			console.log('side menu componentWillUpdate call');
		
	}
	componentWillReceiveProps(nextProps) {
		 
		 // console.log("componentWillReceiveProps current url --- " + this.props.userImage.map((url) => url['url']));
	}
	componentDidMount(){
		console.log('side menu componentDidMount call');

	
		   }
		
	navigateTo = (routeName: string) => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })]
    })
    this.props.navigation.dispatch(resetAction)
  }
	

	render(){

	return(
		<View style={styles.container}>
		<SafeAreaView style={{flex: 1}}>
      	
  	  	<View style={{ backgroundColor:'#0f83cc', height: 160,flexDirection:'row',alignItems: 'center',justifyContent: 'center' }}>
			
				<View style={{ alignItems: 'center',justifyContent: 'center',alignSelf:'center'}}>
					<TouchableOpacity onPress={()=>this.checkUser("profile")}>
 						 <Image style={{  borderRadius: 40,width: 80,height: 80,margin:8, marginTop:10}} source={{uri:this.state.profileImage}} ></Image>
					</TouchableOpacity>
      				<Text style={{ color: 'white', fontSize: 15 ,color:'white',}}>Sandeep </Text>
				</View>
																				
    	</View>
    	  <ScrollView>
		<View style={{marginTop:10,flexDirection:'column',}}>				
			<TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
				<View style={{backgroundColor:'white',padding:15,alignItems:'center',flexDirection:'row'}}>
					<Text style={{fontSize:15,color:'black',marginLeft:15,}}>Features</Text>
				</View>
			</TouchableOpacity>
					
				<View style={{ backgroundColor:'black',height:1,width:'100%'}}/>
					<TouchableOpacity onPress={()=>this.props.navigation.navigate('DiscoverMusic')}>
				 		<View style={{backgroundColor:'white',padding:15,alignItems:'center',flexDirection:'row'}}>
							<Text style={{fontSize:15,color:'black',marginLeft:15,}}>Discover</Text>
							</View>
					</TouchableOpacity>	
							
				<View style={{ backgroundColor:'black',height:1,width:'100%'}}/>
					<TouchableOpacity  onPress={()=>this.props.navigation.navigate('Singles')}>
				 		<View style={{backgroundColor:'white',padding:15,alignItems:'center',flexDirection:'row'}}>
							<Text style={{fontSize:15,color:'black',marginLeft:15,}}>Singles</Text>
							</View>
					</TouchableOpacity>	
				<View style={{ backgroundColor:'black',height:1,width:'100%'}}/>
					<TouchableOpacity onPress={()=>this.props.navigation.navigate('Videos')}>
				 		<View style={{back013220groundColor:'white',padding:15,alignItems:'center',flexDirection:'row'}}>
							<Text style={{fontSize:15,color:'black',marginLeft:15,}}>Visuals</Text>
							</View>
					</TouchableOpacity>			
						
				<View style={{ backgroundColor:'black',height:1,width:'100%'}}/>
					<TouchableOpacity onPress={()=>this.checkUser("MyMusic")} > 
				 		<View style={{backgroundColor:'white',padding:15,alignItems:'center',flexDirection:'row'}}>
							<Text style={{fontSize:15,color:'black',marginLeft:15,}}>Logout</Text>
							</View>
					</TouchableOpacity>	
							
				
			</View>		
					
        </ScrollView>
        </SafeAreaView>
      </View>
	);
	}
}
	  
export default SideMenu;
