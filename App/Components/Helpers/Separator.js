import React, { Component } from 'react-native';

const {
	View,
	StyleSheet
} = React;

var styles = StyleSheet.create({
	separator: {
		height: 1,
		flex: 1,
		backgroundColor: '#E4E4E4',
		marginLeft: 15
	}
})


export class Separator extends Component {
	render () {
		return <View key={'s'} style={styles.separator} />
	}
}