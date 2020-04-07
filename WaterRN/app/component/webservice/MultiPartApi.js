import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
	Image,
	TextInput,
	TouchableOpacity,Dimensions,AsyncStorage,
	ScrollView,Alert
} from 'react-native';

//const BASE_URL='http://192.168.1.110/mixtape/Api/'; 
const BASE_URL='http://ec2-3-89-170-250.compute-1.amazonaws.com/mixtape/Api/'; 

class MultiPartApi {	
  //static LOGIN ='Api/login';
  static REGISTER_API ='signup';
  static ADD_AUDIO_SINGLE='add_audio_single';
  static UPLOAD_FILE='add_file_album'
  static ADD_VIDEO='add_video';
  static ADD_MIXTAPE='add_mixtape';
  static UPDATE_PROFILE='update_profile';
  static ADD_ALBUM='add_album';
  static headers() {
    return {
      Accept: 'application/json',
       "Content-type": "application/json; charset=UTF-8",
      'dataType': 'json',
    }
  }
	
  static get(route,url) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params,url) {
    return this.xhr(route, params, 'PUT')
  }

	static post(route, params) {
    return this.xhr(BASE_URL+route, params, 'POST')
  }
	
  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(route, params, verb) {
  console.log('complete url  ' +route); 

    console.log("params =="+params);
    console.log("verb =="+verb);

  return fetch(route, {
     method: verb,
     headers: {
       'Content-Type': 'multipart/form-data'
      },
     body: params   
   })
   .then(response => response.json())
  .then(json =>{
	  console.log(json)
   return json 
  })
  .catch( (error) => {
	   console.log("getting error="+error);	 
    })
  }

 static xhrGet(route, params, verb) {
  console.log('complete url  ' +route); 

    console.log("params =="+params);
    console.log("verb =="+verb);

  return fetch(route, {
     method: verb,
     headers: {
       'Content-Type': 'multipart/form-data'
      }
   })
  then((response)=>response.json()).then((responseData)=>{
			  console.log("message---------"+responseData.message);
            alert("Response:"+JSON.stringify(responseData))
            if(responseData.data.status == 404){
                Alert.alert("KOOPI", responseData.message)
			        	console.log("message---------"+responseData.message);
              }
	  return responseData
         })
   .catch( (error) => {

    })

  }
}
export default MultiPartApi
