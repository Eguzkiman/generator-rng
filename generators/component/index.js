'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const camelCase = require('camelcase');

module.exports = class extends Generator {

	constructor () {
		super(...arguments);
		this.argument('componentName', { type: String, required: true });
		// this.argument('isDelete', { type: String, required: false, default: false });

		this.option('delete', {
			description: 'Delete the component',
			alias: 'd',
			type: Boolean,
			default: false
		});

		this.option('functional', {
			description: 'Generate a functional component',
			alias: 'f',
			type: Boolean,
			default: false
		});

		this.option('pure', {
			description: 'Generate a pure component',
			alias: 'p',
			type: Boolean,
			default: false
		});
	}

	generate () {
		if (this.options.delete)
			this._deleteComponent();
		else
			this._writeComponent();

	}

	_deleteComponent () {
		let componentName = this.options.componentName;
		this.fs.delete(this.destinationPath(`app/components/${componentName}.jsx`));
	}

	_writeComponent () {
		let componentName = this.options.componentName;
		let shouldUsePascalCase = !this.options.functional;
		let camelizedComponentName = camelCase(componentName, { pascalCase: shouldUsePascalCase });

		if (this.options.functional)
			var template = 'functionalComponent.jsx';
		else if (this.options.pure)
			var template = 'pureComponent.jsx';
		else
			var template = 'component.jsx';

		this.fs.copyTpl(
			this.templatePath(template),
			this.destinationPath(`app/components/${componentName}.jsx`),
			{ camelizedComponentName }
		);
	}
}
