import React, { PureComponent } from 'react';

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
