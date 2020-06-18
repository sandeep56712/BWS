import { Alert } from "react-native";
import NetInfo from "@react-native-community/netinfo";

const BASE_URL = "http://waterapp.beangate.in/api/";

class Api {
  //static IMAGE_BASE_URL = 'http://192.168.1.127/helply/';
  static IMAGE_BASE_URL = "http://waterapp.beangate.in/api/";
  static LOGIN_API = "login";
  
  static LOGOUT_API = "logout";
  static REGISTER_API = "users";
  static GET_ALL_ZONES = "zones";
  static ADD_TO_USER = "users/";
  static ADD_A_NEW_PLACE = "places";
  static USER = "user";
  static TRIPS = "trips";
  static LOGOUT = "logout";
  static SHIFTS = "shifts";


  //phase change API -
  static CHECK_VERSION_UPDATE = "check_version_update";

  static getBaseUrl(route) {
    return BASE_URL + route;
  }

  /*static setHeader(token) {
    return headers: {
        "Content-Type": "application/json;charset=UTF-8"
        'Authorization': 'Bearer ' + token
      }
  }*/

  static getWithHeader = async (route, token) => {

    var stateConnected = await this.checkNetworkConnection();

    if (stateConnected) {
      console.log("testing----->")
      return this.xhrJsonToken(BASE_URL + route, "" ,"GET", token);
    } else {
        var responseJson = {
            'status' : 301
        }
        console.log("Apicalling", "JSON.stringify(json) :- " + JSON.stringify(responseJson));
        // Alert.alert("Internet not connected.!!!");     
        return responseJson;
    }
  }

  static getHeader = async (route, token) => {

    var stateConnected = await this.checkNetworkConnection();

    if (stateConnected) {
      return this.xhrJsonWoResponseBody(BASE_URL + route, "" ,"GET", token);
    } else {
        var responseJson = {
            'status' : 301
        }
        console.log("Apicalling", "JSON.stringify(json) :- " + JSON.stringify(responseJson));
        // Alert.alert("Internet not connected.!!!");     
        return responseJson;
    }
  }

  static patchWithHeader = async (route, token) => {

    var stateConnected = await this.checkNetworkConnection();

    if (stateConnected) {
      return this.xhrJsonToken(BASE_URL + route, "" ,"PATCH", token);
    } else {
        var responseJson = {
            'status' : 301
        }
        console.log("Apicalling", "JSON.stringify(json) :- " + JSON.stringify(responseJson));
        // Alert.alert("Internet not connected.!!!");     
        return responseJson;
    }
  }

  static patchHeader = async (route, token) => {

    var stateConnected = await this.checkNetworkConnection();

    if (stateConnected) {
      return this.xhrJsonWoResponseBody(BASE_URL + route, "" ,"PATCH", token);
    } else {
        var responseJson = {
            'status' : 301
        }
        console.log("Apicalling", "JSON.stringify(json) :- " + JSON.stringify(responseJson));
        // Alert.alert("Internet not connected.!!!");     
        return responseJson;
    }
  }

  static patchWithHeaderParams = async (route, params, token) => {

    var stateConnected = await this.checkNetworkConnection();

    if (stateConnected) {
      return this.xhrJsonToken(BASE_URL + route, params ,"PATCH", token);
    } else {
        var responseJson = {
            'status' : 301
        }
        console.log("Apicalling", "JSON.stringify(json) :- " + JSON.stringify(responseJson));
        // Alert.alert("Internet not connected.!!!");     
        return responseJson;
    }
  }

  static getUrl = async(route) => {

    var stateConnected = await this.checkNetworkConnection();

    if (stateConnected) {
      return this.xhrGet(BASE_URL + route, "GET");
    } else {
        var responseJson = {
            'status' : 301
        }
        console.log("Apicalling", "JSON.stringify(json) :- " + JSON.stringify(responseJson));
        return responseJson;
    }
  }

  static getUrlToken = async(route, token) => {

    var stateConnected = await this.checkNetworkConnection();

    if (stateConnected) {
      return this.xhrLogout(BASE_URL + route, "GET", token);
    } else {
        var responseJson = {
            'status' : 301
        }
        console.log("Apicalling", "JSON.stringify(json) :- " + JSON.stringify(responseJson));
        return responseJson;
    }
  }

  static put(route, params, url) {
    return this.xhrJson(route, params, "PUT");
  }

  static post = async (route, params) => {

    var stateConnected = await this.checkNetworkConnection();

    if (stateConnected) {
      return this.xhrJson(BASE_URL + route, params, "POST");
    } else {
        var responseJson = {
            'status' : 301
        }
        console.log("Apicalling", "JSON.stringify(json) :- " + JSON.stringify(responseJson));
        return responseJson;
    }
  }

  static postWithHeader = async (route, params, token) => {

    var stateConnected = await this.checkNetworkConnection();

    if (stateConnected) {
      return this.xhrJsonToken(BASE_URL + route, params, "POST", token);
    } else {
        var responseJson = {
            'status' : 301
        }
        console.log("Apicalling", "JSON.stringify(json) :- " + JSON.stringify(responseJson));
        // Alert.alert("Internet not connected.!!!");     
        return responseJson;
    }
  }
  
  static Multipart(route, params) {
    return this.xhrGet(BASE_URL + route, params, "POST");
  }

  static delete(route, params) {
    return this.xhrJson(route, params, "DELETE");
  }

  static checkNetworkConnection = async () => {

    console.log("Apicalling.JS","Inside checkNetworkConnection() ");

    var isConnected = false;

    await NetInfo.fetch().then(state => {
      console.log("Apicalling.Js","Connection type", state.type);
      console.log("Apicalling.Js","Is connected?", state.isConnected);

      isConnected =  state.isConnected;

     /* if (isConnected) {
        return true;
      } else {
        console.log("Apicalling.Js"," inside else");
        Alert.alert("Internet not connected.!!!")
        var responseJson = {
            'status' : 301
          }
        console.log("Apicalling.Js"," inside else responseJson :- " + JSON.stringify(responseJson));
        return false;
      }*/
      //return false;
    });

    return isConnected;
  }

  static xhrJson(route, params, verb) {

    var token, status;
    console.log("Apicalling",'complete url Apicalling xhrJson:- '+route+" "+params);
    return fetch(route, {
      method: verb,
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      },    
      body: params
    })
      .then(response => {
        console.log("Apicalling"," response only :- "+JSON.stringify(response));
        console.log("Apicalling"," authorization token 213:- "+ response.headers.map.authorization);
        console.log("Apicalling"," status:- "+response.status);

        status = response.status;

        if (response.headers.map.authorization != undefined || response.headers.map.authorization != null) {
          token = response.headers.map.authorization;
        } else {
          token = null;
        }
        console.warn("Apicalling"," token abcd:- "+token);

        if (status ==  200 || status ==  201) {
          return response.json();
        } else {
          var response = {
            status:status
          }
          return response;
        }
        // return response.json();
      })
      .then(json => {
        
        console.warn("Apicalling","inside status :- " + status);
        console.warn("Apicalling","inside token :- " + token);
        console.log ("Apicalling ","Response Json :- " + JSON.stringify(json));

        var responseJson = {
          'status':status,
          'data':json,
          'token':token
        }
        console.warn ("Apicalling ","Final Json created :- " + JSON.stringify(responseJson));

        return responseJson;
      })
      .catch(error => {
        console.log("complete url error", route + " " + params + " " + verb);
        //alert("Error ");
        console.log(error);
      });
  }

  static xhrJsonToken(route, params, verb, token) {

    console.log("Apicalling","URL route xhrJsonToken :- "+route);

    var status;
    return fetch(route, {
      method: verb,
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-API': token
      },
      body: params
    })
      .then(response => {
        console.log("Apicalling"," response only :- "+JSON.stringify(response));

        var dataSize = response._bodyInit._data.size;
        console.log("Apicalling","Response dataSize :- " + dataSize);      
        console.log("Apicalling","xhrJsonToken response.status :- " + response.status);      
        
        status = response.status;

        if (status == 404) {

          var responseJson = {
            'status':status,
            'data':[],
          }
          console.log("Apicalling"," responseJson only :- "+JSON.stringify(responseJson));
          return responseJson;

        } else {
          return response.json();
        }
      })
      .then(json => {
        var responseJson = {
          'status':status,
          'data':json,
        }
        console.warn ("Apicalling ","Final Json created :- " + JSON.stringify(responseJson));

        return responseJson;
      })
      .catch(error => {
        console.log("complete url error", route + " " + params + " " + verb);
        //alert("Error ");
        console.log(error);
      });
  }


  static xhrJsonWoResponseBody(route, params, verb, token) {

    console.log("Apicalling","URL route xhrJsonWoResponseBody :- "+route);

    var status;
    return fetch(route, {
      method: verb,
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-API': token
      },
      body: params
    })
      .then(response => {
        console.log("Apicalling"," response only :- "+JSON.stringify(response));
        status = response.status;
        if (response.ok) {
          var dataSize = response._bodyInit._data.size;
          console.log("Apicalling"," response dataSize :- "+dataSize);          
          var responseJson = {
            'status':status,
            'data':[],
          }
          console.log("Apicalling"," responseJson only :- "+JSON.stringify(responseJson));
          return responseJson;
        } else {
          var responseJson = {
            'status':status,
            'data':[],
          }
          console.log("Apicalling"," responseJson only :- "+JSON.stringify(responseJson));
          return responseJson;
        }
      })
      .catch(error => {
        console.log("complete url error", route + " " + params + " " + verb);
        //alert("Error ");
        console.log(error);
      });
  }

  static xhrGet(route, verb) {

    var status;
    return fetch(route, {
      method: verb,
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      }
    })
      .then(response => {
        console.log("Apicalling"," response only :- "+JSON.stringify(response));
        status = response.status;
        return response.json();
      })
      .then(json => {

        var responseJson = {
          'status':status,
          'data':json,
        }
        console.warn ("Apicalling ","Final Json created :- " + JSON.stringify(responseJson));

        return responseJson;
      })
      .catch(error => {
        console.log("complete url error", route + " " + params + " " + verb);
        //alert("Error ");
        console.log(error);
      });
  }

  static uploadImage(route, data) {
    var url = BASE_URL + route;
    console.log("uploadImage before  calling " + url, data);
    return fetch(
      url,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data"
        },
        body: data
      },
      { timeout: 20000 }
    )
      .then(response => {
        console.log(" uploadImage response" + url, response);
        return response.json();
      })
      .then(json => {
        console.log("uploadImage complete url success " + url, data, json);
        return json;
      })
      .catch(error => {
        console.log("uploadImage complete url error " + url, data, error);
        return { status: 500, message: "error to upload image ", error: error };
      });
  }

  static xhrLogout(route, verb, token) {
    console.log('complete url Apicalling :- ',route);
    return fetch(route, {
      method: verb,
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-API': token
      }
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(json => {
        //alert(json);
        console.log(
          "complete url success xhrLogout " + route + " " + params + " " + verb,
          json
        );
        return json;
      })
      .catch(error => {
        console.log("complete url error xhrLogout", route + " " + params + " " + verb);
        //alert("Error ");
        console.log(error);
      });
  }
}

export default Api;
