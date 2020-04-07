import React, { PureComponent } from 'react';
import { View, Text, NetInfo, Dimensions, StyleSheet,Alert } from 'react-native';
const { width } = Dimensions.get('window');
function OfflineSign() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
    </View>
  );
}

class NetConnection extends PureComponent {
	 state = {
    isConnected: true
  };

	
  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }
  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
    }
  };
  render() {
 if (!this.state.isConnected) {
      return <OfflineSign />;
    }
    return null;
  }  }

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    top: 0
  },
  offlineText: { 
    color: '#fff'
  }
});
export default NetConnection;