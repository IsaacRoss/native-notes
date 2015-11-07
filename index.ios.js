'use strict';

import React, { Component } from 'react-native';
const {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} = React;

import Main from './App/Components/Main';


class githubNotes extends Component {
  render() {
    return (
      <NavigatorIOS
      style={styles.container}
        initialRoute={{
          title: 'Github Notetaker',
          component: Main
        }} />
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  }
});

AppRegistry.registerComponent('githubNotes', () => githubNotes);
