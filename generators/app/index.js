'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
	greet () {
		// Have Yeoman greet the user.
		this.log(
			yosay(`Welcome to the superb ${chalk.red('generator-rng')} generator!`)
		);
	}

	_copyFile (path) {

		let name = this.props.name;

		this.fs.copyTpl(
			this.templatePath(path),
			this.destinationPath(path),
			{ name }
		);
	}

	getProjectName () {
		let { name } = this.fs.readJSON('package.json');
		this.props = { name };
	}

	deleteFiles () {
		this.fs.delete(this.destinationPath('App.js'));
	}

	writeFiles () {
		this._copyFile('App.jsx');
		this._copyFile('app/Router.jsx');
		this._copyFile('app/screens/HomeScreen.jsx');
		this._copyFile('app/services/navigatorOptions.jsx');
		this._copyFile('app/styles/colorStyles.jsx');
		this._copyFile('rn-cli.config.js');
		this._copyFile('.editorconfig');
	}

	install () {
		this.yarnInstall(['react-navigation']);
	}
};
