"use strict";

const emptyField='Please enter the field value!';
const inValidField='Please enter valid field value!'  ;     
//const urlPattern=/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
const domainPattern=/^(?!\-)(?:[a-zA-Z\d\-]{0,62}[a-zA-Z\d]\.){1,126}(?!\d+)[a-zA-Z\d]{1,63}$/;
 const urlPattern =  /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
const emailPattern=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
const alphaPAttern=/^[^!-\\/:-@\\[-`{-~]+$/;
//const alphanumericPattern=/^[a-zA-Z0-9]*$/;
//const alphanumericPattern=/[^a-z\d]/i;
const alphanumericPattern=/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;



class Validation{
	
	static digitsPattern: '/\d/';
  	static lettersPattern: '/[a-zA-Z]/';
  	static lowerCasePattern: '/[a-z]/';
  	static upperCasePattern: '/[A-Z]/';
  	static wordsPattern: '/\w/';
  	static symbolsPattern: '/\W/';

	static isValidEmail(email){
		if (!email){
			console.log('inside validation emptyField:'+emptyField);
			return emptyField;
		}
		
		if(email.length>254){
			console.log('inside validation inValidField:'+inValidField);
			return inValidField;
		
		}
		var valid = emailPattern.test(email);
			if(!valid)
				return inValidField;

		// Further checking of some things regex can't handle
		var parts = email.split("@");
			if(parts[0].length>64)
				return inValidField;

		var domainParts = parts[1].split(".");
			if(domainParts.some(function(part) { return part.length>63; }))
				return inValidField;

		return '';
	}
static isEmptyField(text){
	if(!text){
		console.log('inside validation emptyField:'+emptyField);
 					return emptyField;
 	}
 	if(!emptyField.test(text)){
 		return emptyField;
 	}
}
static isOnlyCharacters(text){
	if(!text){
		 	return emptyField;
	}if(!alphaPAttern.test(text)){
		return inValidField;
	}else{
		return '';
	}
}
 static isValidPassword(password){

 		if(!password){
 					console.log('inside validation emptyField:'+emptyField);
 					return emptyField;
 		}
 		if(!alphanumericPattern.test(password)){
 			return inValidField;
 		}else{
 			return '';
 		}
 }
		static isValidUrl(url){
			if (!url){
			console.log('inside validation emptyField:'+emptyField);
			return emptyField;
			}
	
			if(!urlPattern.test(url)) {
   
  			  return inValidField;
  			} else {
  				  return '';
  			}
 }
	
 	static isValidDomain(domain){
 		if(!domain){
 				console.log('inside validation emptyField:'+emptyField);
				return emptyField;
 		}
		 if(!domainPattern.test(domain)){
		 	return inValidField
		 }
		 else{
	 	  return '';
		 }
 	}
	static isValid_Password(password,pattern,isPatternChecked){
		if (!password)
			return emptyField;
		
		if(password.length<5)
			return inValidField;

		if(isPatternChecked){
			  switch (pattern) {
      		case 'symbols':
      				if(!symbolsPattern.test(password)){
        			return inValidField;
        			}
        			else{
        				return '';
        			}
     	    case 'words':

     	   			if(!symbolsPattern.test(password)){
        			return inValidField;
        			}
        			else{
        				return '';
        			}
     		case 'digits':
     				if(!digitsPattern.test(password)){
        			return inValidField;
        			}
        			else{
        				return '';
        			}      				
      		case 'letters':
      				if(!lettersPattern.test(password)){
        			return inValidField;
        			}
        			else{
        				return '';
        			} 
        		
      		case 'lowerCase':
      				if(!lowerCasePattern.test(password)){
        			return inValidField;
        			}
        			else{
        				return '';
        			} 
       				
     		case 'upperCase':
     				if(!upperCasePattern.test(password)){
        			return inValidField;
        			}
        			else{
        				return '';
        			} 
     		default:
       			   return '';
    }
		}
	}


}
export default Validation
