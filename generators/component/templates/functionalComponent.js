import React from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './<%= componentPath %>-style';

export default function <%= camelizedComponentName %> () {
	return (
		<View>
			<Text><%= camelizedComponentName %></Text>
		</View>
	)
}

<%= camelizedComponentName %>.propTypes = {
	// data: PropTypes.array
}

<%= camelizedComponentName %>.defaultProps = {
	// data: []
}
