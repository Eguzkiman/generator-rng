import React, { Component } from 'react';

import {
	Text,
	View
} from 'react-native';

import style from './<%= componentName %>-style';

export default class <%= camelizedComponentName %> extends Component {

	// constructor (props) {
	// 	super(props);
	// 	this.state = { date: new Date() };
	// }

	render () {
		return (
			<View>
				<Text><%= camelizedComponentName %></Text>
			</View>
		);
	}
}
