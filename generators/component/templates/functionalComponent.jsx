import React from 'react';

import {
	Text,
	View
} from 'react-native';

import style from './<%= componentName %>-style';

export default function <%= camelizedComponentName %> () {
	return (
		<View>
			<Text><%= camelizedComponentName %></Text>
		</View>
	)
}
