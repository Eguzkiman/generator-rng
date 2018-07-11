'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const camelCase = require('camelcase');

module.exports = class extends Generator {
	constructor () {
		super(...arguments);
		this.argument('screenName', { type: String, required: true });
		this.argument('isDelete', { type: String, required: false, default: false });
	}

	generate () {
		if (this.options.isDelete === 'd')
			this._deleteFile();
		else
			this._writeFile();
	}

	_deleteFile () {
		let screenName = this.options.screenName;
		this.fs.delete(this.destinationPath(`app/screens/${screenName}.jsx`));
	}

	_writeFile () {
		let screenName = this.options.screenName;
		let camelizedScreenName = camelCase(screenName, { pascalCase: true });

		this.fs.copyTpl(
			this.templatePath('screen.jsx'),
			this.destinationPath(`app/screens/${screenName}.jsx`),
			{ camelizedScreenName }
		);
	}
}
