import { NavigationActions } from "react-navigation";

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  if (navigatorRef != null) {
    _navigator = navigatorRef;
  }
}

function navigate(routeName, params) {
  //console.log("Navigations Service", routeName, params, _navigator);
  _navigator &&
    _navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params
      })
    );
}

export default {
  navigate,
  setTopLevelNavigator
};
