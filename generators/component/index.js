'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const camelCase = require('camelcase');

module.exports = class extends Generator {

	constructor () {
		super(...arguments);
		this.argument('componentName', { type: String, required: true });
		this.argument('isDelete', { type: String, required: false, default: false });
	}

	generate () {
		if (this.options.isDelete === 'd')
			this._deleteFile();
		else
			this._writeFile();
	}

	_deleteFile () {
		let componentName = this.options.componentName;
		this.fs.delete(this.destinationPath(`app/components/${componentName}.jsx`));
	}

	_writeFile () {
		let componentName = this.options.componentName;
		let camelizedComponentName = camelCase(componentName, { pascalCase: true });

		this.fs.copyTpl(
			this.templatePath('component.jsx'),
			this.destinationPath(`app/components/${componentName}.jsx`),
			{ camelizedComponentName }
		);
	}
}
