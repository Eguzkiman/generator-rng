// Use this file to create all app navigators.

import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// For each navigator, import its screens. Each screen may be used in many navigators
// To add more screens, run yo rng:g screen <screen-name>

import HomeScreen from '<%= appName %>/app/screens/home-screen';

// You might want to add some navigator options to your navigator.
// You can edit this options in app/serivices/navigatorOptions.js
// import { stackNavigatorOptions } from '<%= appName %>/app/services/navigatorOptions';
import { ApplicationStyles } from '<%= appName %>/app/styles';

const MainNavigator = createStackNavigator({
	HomeScreen
}, {
	initialRouteName: 'HomeScreen',
	navigationOptions: {
		...ApplicationStyles.stackNavigatorOptions
	}
});

export default createAppContainer(MainNavigator);
