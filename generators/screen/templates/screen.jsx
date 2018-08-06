import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

import styles from './<%= screenName %>-style';

export default class <%= camelizedScreenName %> extends Component {
	static navigationOptions = {
		title: '<%= camelizedScreenName %>'
	}
	render () {
		return (
			<View style={styles.container}>
				<Text style={styles.bodyText}><%= camelizedScreenName %></Text>
			</View>
		);
	}
}
