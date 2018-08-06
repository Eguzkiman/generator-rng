'use strict';
const Generator = require('yeoman-generator');
const yosay = require('yosay');

module.exports = class extends Generator {
	greet() {
		// Have Yeoman greet the user.
		this.log(yosay(`H4X0R1NG UR 4PP!`));
	}

	getProjectName() {
		let { name } = this.fs.readJSON('package.json');
		this.props = { appName: name };
	}

	_copyFile(path) {
		let appName = this.props.appName;
		this.fs.copyTpl(this.templatePath(path), this.destinationPath(path), { appName });
	}

	deleteFiles() {
		this.fs.delete(this.destinationPath('App.js'));
	}

	writeFiles() {
		// Main files
		this._copyFile('App.jsx');
		this._copyFile('app/Router.jsx');
		// Services
		this._copyFile('app/services/api-service.js');
		// HomeScreen
		this._copyFile('app/screens/home-screen/home-screen.jsx');
		this._copyFile('app/screens/home-screen/home-screen-style.js');
		this._copyFile('app/screens/home-screen/home-screen-test.js');
		this._copyFile('app/screens/home-screen/index.js');
		// Styles
		this._copyFile('app/styles/color.js');
		this._copyFile('app/styles/font.js');
		this._copyFile('app/styles/metrics.js');
		this._copyFile('app/styles/ApplicationStyles.js');
		this._copyFile('app/styles/index.js');
		// Config
		this._copyFile('rn-cli.config.js');
		this._copyFile('.editorconfig');
	}

	install() {
		this.yarnInstall(['react-navigation']);
	}
};
