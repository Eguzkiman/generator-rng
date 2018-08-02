import React, { PureComponent } from 'react';

import {
	Text,
	View
} from 'react-native';

export default class <%= camelizedComponentName %> extends PureComponent {
	render () {
		return (
			<View>
				<Text><%= camelizedComponentName %></Text>
			</View>
		);
	}
}
