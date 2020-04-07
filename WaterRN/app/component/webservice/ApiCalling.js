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
class Api {	
  //static LOGIN ='Api/login';
  static BASE_MEDIA_URL='http://ec2-3-89-170-250.compute-1.amazonaws.com/mixtape/'
  //static BASE_MEDIA_URL='http://192.168.1.110/mixtape/'
  static LOGIN_API ='login';
  static GET_USER_INFO='get_user_details';
  static REGISTER='signup';
  static REGISTER_COMPLETE='complete_profile';
  static UPDATE_PROFILE='update_profile';
  static CHANGE_PASSWORD='changepassword';
  static GET_USER_ALBUM_ALL='get_user_album_all';
  static GET_SONG_CATEGORY='get_all_categories';
  static CREATE_ALBUM='add_album';
  static GET_ALBUM_LIST='get_album_songs';
  static GET_ARTIST_OTHER_ALBUM='get_user_albums'
  static DELETE_AUDIO_USER_ALBUM='delete_user_album_audio';
  static DELETE_USER_ALBUM='delete_user_album';
  static FORGOT_PASSWORD='forgotpassword';
  static STREAM_QUALITY='changeScreamQuality';
  static SEARCH_ALBUM='search';
  static UPCOMING_ALBUM='upcoming_albums';
  static GET_POPULAR='popular_albums';
  static GET_NEW_RELEASE='new_release_albums';
  static GET_COMMENT='get_comments';
 static SUBSCRIBE_API='subscribe';
 static GET_SUBSCRIBER='get_subscriber';
 static UNSUBSCRIBE='unsubscribe';
 static ADD_COMMENT='add_comment';
 static DOWNLOAD_SONG='download_song';
 static CHANGE_STREAM_QUALITY='changeScreamQuality';
 /*17th Dec */
 static CREATE_PLAYLIST='create_playlist';
 static GET_USER_PLAYLIST='user_playlist';
 static ADD_PLAYLIST='add_to_playlist';
 static GET_PLAYLIST_SONG='get_playlist_songs';
 static GET_TOP_VIDEO='get_page_video';
 static GET_WATS_HOT='get_whatshot_song';
 static GET_ALL_ALBUM='get_albums';
 static GET_ALL_DOWNLOADS='get_all_downloads';
 static GET_SINGLE_ALL='get_song_all';
 static GET_NOTIFICATION='get_user_notification';
 static CONTACT_US='contact_form';
 static GET_USER_ACTIVE='get_user_active';
static TERM_CONDITION='termandcondition_page';
static PRIVACY_POLICY='privacy_page';
static UPCOMING_ARTIST_DJ='upcoming_artist_dj';
static GET_USER_ALBUM_LATEST='get_user_albums_latest';
static GET_USER_ALBUM_ALL_LATEST='get_user_album_all_latest'; // call from subscriber 
static ADD_PLAY_COUNT='add_play_count';
static DELETE_AUDIO_USER_ALBUM='delete_user_album_audio';
static DELETE_VIDEO_USER_ALBUM='delete_user_album_video';
static MIXTAPE_UPLOAD_PRICE='mixtape_upload_prices';
static VIDEO_UPLOAD_PRICE='single_upload_video_prices';
static AUDIO_UPLOAD_PRICE='single_upload_audio_prices';
static GET_HOME_PAGE='landing_page_data';
static PUBLISH_MIXTAPE='publish_mixtape_album';
static GET_USER_VIDEO='get_user_all_videos';
static TOP_VIDDEO_REQ='send_top_video_request';
static GET_SONG_ALL_PAGINATION='get_song_all_pagination';
static GET_INTERVIEW='get_interview_all';
static GET_ADD='get_ads';
static GET_SUBSCRIBTION_LIST='get_subscribtion_list';
static ADD_ALBUM_LIBRARY='add_album_to_library';
static GET_ALBUM_LIBRARY='get_library_albums';
static DELETE_ALBUM_LIBRARY='delete_album_from_library';
static ADD_SONG_LIBRARY='add_audio_to_library';
static GET_SONG_LIBRARY='get_library_songs';
static DELETE_SONG_LIBRARY='delete_audio_from_library';
static STRIPE_PAYMENT='stripe_payment';


  static headers() {
    return {
      Accept: 'application/json',
       "Content-type": "application/json; charset=UTF-8",
      'dataType': 'json',
    }
  }
	
  static get(route,url) {
    return this.xhr(BASE_URL+route, null, 'GET');
  }

  static put(route, params,url) {
    return this.xhr(route, params, 'PUT')
  }

	static post(route, params) {
    return this.xhr(BASE_URL+route, params, 'POST')
  }
	static Multipart(route, params){
		 return this.xhrGet(BASE_URL+route, params, 'POST')
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
       "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
     body: params   
   })
   .then(response => response.json())
  .then(json =>{console.log(json)
   return json })
  .catch( (error) => {
	 
 
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
               // Alert.alert("KOOPI", responseData.message)
				console.log("message---------"+responseData.message);
              }
	  return responseData
         })
   .catch( (error) => {

    })

  }
}
export default Api
