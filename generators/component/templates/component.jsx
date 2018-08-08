import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import style from './<%= componentPath %>-style';

export default class <%= camelizedComponentName %> extends Component {

	// constructor (props) {
	// 	super(props);
	// 	this.state = { data: props.data };
	// }

	render () {
		return (
			<View>
				<Text><%= camelizedComponentName %></Text>
			</View>
		);
	}
}

<%= camelizedComponentName %>.propTypes = {
	// data: PropTypes.array
}

<%= camelizedComponentName %>.defaultProps = {
	// data: []
}
