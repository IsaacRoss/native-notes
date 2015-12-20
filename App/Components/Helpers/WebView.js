import React, { Component } from 'react-native';

const {
	View,
	WebView,
	StyleSheet
} = React;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F6F6EF',
		flexDirection: 'column'
	}
});


export class Web extends Component {
	render () {
		return (
			<View style={styles.container}>
				<WebView url={this.props.url} />
			</View>
		)
		
	}
}

Web.propTypes = {
  url: React.PropTypes.string.isRequired
};