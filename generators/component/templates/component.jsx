import React, { Component } from 'react';

import {
	Text,
	View
} from 'react-native';

export default class <%= camelizedComponentName %> extends Component {
	render () {
		return (
			<View>
				<Text><%= camelizedComponentName %></Text>
			</View>
		);
	}
}
