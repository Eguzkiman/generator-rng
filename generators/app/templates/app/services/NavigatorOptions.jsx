import colorStyles from '<%= name %>/app/styles/colorStyles';

export const stackNavigatorOptions = {
	navigationOptions: {
		title: 'Stack Title', // Override in screen component
		headerStyle: {
			backgroundColor: colorStyles.headerBackgroundColor
		},
		headerTintColor: colorStyles.headerTintColor,
	}
};
