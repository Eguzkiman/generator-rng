import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

import styles from './home-screen-style';

export default class HomeScreen extends Component {
	static navigationOptions = {
		title: '<%= appName %>'
	}
	render () {
		return (
			<View style={styles.container}>
				<Text style={styles.mainText}>U R RDY 2 H4X</Text>
			</View>
		);
	}
}
