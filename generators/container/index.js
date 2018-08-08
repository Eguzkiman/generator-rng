'use strict';
const Generator = require('yeoman-generator');
const camelCase = require('camelcase');

module.exports = class extends Generator {
	constructor() {
		super(...arguments);
		this.argument('containerName', { type: String, required: true });

		this.option('delete', {
			description: 'Delete the container',
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
		if (this.options.delete) this._deleteContainer();
		else this._writeContainer();
	}

	_deleteContainer() {
		let containerName = this.options.containerName;
		this.fs.delete(this.destinationPath(`app/containers/${containerName}`));
	}

	_writeContainer() {
		let containerPath = this.options.containerName;
		let containerName = containerPath.split('/').pop();
		let camelizedContainerName = camelCase(containerName);
		let pascalizedContainerName = camelCase(containerName, { pascalCase: true });
		let appName = this.props.appName;

		let templateParams = {
			containerPath,
			containerName,
			camelizedContainerName,
			pascalizedContainerName,
			appName
		};

		this.fs.copyTpl(
			this.templatePath('container.jsx'),
			this.destinationPath(`app/containers/${containerPath}/${containerName}.jsx`),
			templateParams
		);

		this.fs.copyTpl(
			this.templatePath('container-test.js'),
			this.destinationPath(
				`app/containers/${containerPath}/${containerName}-test.js`
			),
			templateParams
		);

		this.fs.copyTpl(
			this.templatePath('container-index.js'),
			this.destinationPath(`app/containers/${containerPath}/index.js`),
			templateParams
		);
	}
};
