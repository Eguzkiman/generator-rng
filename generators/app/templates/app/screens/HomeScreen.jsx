// This is a sample home screen. Feel free to modify it or delete it.
import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

export default class HomeScreen extends Component {
	static navigationOptions = {
		title: '<%= name %>'
	};
	render () {
		return (
			<View style={styles.container}>
				<Text>U R RDY 2 H4X</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
