import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import style from './<%= componentName %>-style';

export default class <%= camelizedComponentName %> extends PureComponent {
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
