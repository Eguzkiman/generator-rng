'use strict';
const Generator = require('yeoman-generator');
const camelCase = require('camelcase');

module.exports = class extends Generator {
	constructor() {
		super(...arguments);
		this.argument('componentName', { type: String, required: true });

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

	getProjectName() {
		let { name } = this.fs.readJSON('package.json');
		this.props = { appName: name };
	}

	generate() {
		if (this.options.delete) this._deleteComponent();
		else this._writeComponent();
	}

	_deleteComponent() {
		let componentName = this.options.componentName;
		this.fs.delete(this.destinationPath(`app/components/${componentName}`));
	}

	_writeComponent() {
		let componentName = this.options.componentName;
		let shouldUsePascalCase = !this.options.functional;
		let appName = this.props.appName;
		let camelizedComponentName = camelCase(componentName, {
			pascalCase: shouldUsePascalCase
		});

		let template;
		if (this.options.functional) template = 'functionalComponent.jsx';
		else if (this.options.pure) template = 'pureComponent.jsx';
		else template = 'component.jsx';

		let templateParams = { camelizedComponentName, componentName, appName };

		this.fs.copyTpl(
			this.templatePath(template),
			this.destinationPath(`app/components/${componentName}/${componentName}.jsx`),
			templateParams
		);
		this.fs.copyTpl(
			this.templatePath('component-style.js'),
			this.destinationPath(
				`app/components/${componentName}/${componentName}-style.js`
			),
			templateParams
		);
		this.fs.copyTpl(
			this.templatePath('component-test.js'),
			this.destinationPath(
				`app/components/${componentName}/${componentName}-test.js`
			),
			templateParams
		);
		this.fs.copyTpl(
			this.templatePath('component-index.js'),
			this.destinationPath(`app/components/${componentName}/index.js`),
			templateParams
		);
	}
};
