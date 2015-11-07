import React, { Component } from 'react-native';

const {
  View,
  Text,
  StyleSheet
} = React;


export default class Dashboard extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text> This is a dashboard </Text>
        <Text> {this.props.userInfo} </Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
})
