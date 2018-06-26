// Use this file to create all app navigators.

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

// For each navigator, import its screens. Each screen can be used in many navigators
// To add more screens, run yo rng:g screen <name>

import HomeScreen from '<%= name %>/app/screens/HomeScreen';

// You might want to add some navigator options to your navigator.
// You can edit this options in app/serivices/navigatorOptions.jsx
import { stackNavigatorOptions } from '<%= name %>/app/services/navigatorOptions';

const MainNavigator = createStackNavigator({
	HomeScreen
}, stackNavigatorOptions);

export default MainNavigator;
