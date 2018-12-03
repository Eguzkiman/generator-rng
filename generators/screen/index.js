'use strict';
const Generator = require('yeoman-generator');
const camelCase = require('camelcase');

module.exports = class extends Generator {
	constructor() {
		super(...arguments);
		this.argument('screenName', { type: String, required: true });

		this.option('delete', {
			description: 'Delete the screen',
			alias: 'd',
			type: Boolean,
			default: false
		});
	}

	getProjectName() {
		let { name } = this.fs.readJSON('package.json');
		this.props = { appName: name };
	}

	generate() {
		if (this.options.delete) this._deleteScreen();
		else this._writeScreen();
	}

	_deleteScreen() {
		let screenName = this.options.screenName;
		this.fs.delete(this.destinationPath(`app/screens/${screenName}`));
	}

	_writeScreen() {
		let screenPath = this.options.screenName;
		let screenName = screenPath.split('/').pop();
		let camelizedScreenName = camelCase(screenName, { pascalCase: true });
		let appName = this.props.appName;

		let templateParams = { screenPath, screenName, camelizedScreenName, appName };

		this.fs.copyTpl(
			this.templatePath('screen.js'),
			this.destinationPath(`app/screens/${screenPath}/${screenName}.js`),
			templateParams
		);
		this.fs.copyTpl(
			this.templatePath('screen-style.js'),
			this.destinationPath(`app/screens/${screenPath}/${screenName}-style.js`),
			templateParams
		);
		this.fs.copyTpl(
			this.templatePath('screen-test.js'),
			this.destinationPath(`app/screens/${screenPath}/${screenName}-test.js`),
			templateParams
		);
		this.fs.copyTpl(
			this.templatePath('screen-index.js'),
			this.destinationPath(`app/screens/${screenPath}/index.js`),
			templateParams
		);
	}
};
