'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
	prompting() {
		// Have Yeoman greet the user.
		this.log(
			yosay(`Welcome to the superb ${chalk.red('generator-rng')} generator!`)
		);

		const prompts = [
			// {
			// 	type: 'confirm',
			// 	name: 'someAnswer',
			// 	message: 'Would you like to enable this option?',
			// 	default: true
			// }
		];

		return this.prompt(prompts).then(props => {
			// To access props later use this.props.someAnswer;
			this.props = props;
		});
	}

	writing() {
		this.fs.copy(
			this.templatePath('rn-cli-config.js'),
			this.destinationPath('rn-cli-config.js')
		);
		this.fs.copy(
			this.templatePath('.editorconfig'),
			this.destinationPath('.editorconfig')
		);
	}

	// install() {
	//   this.installDependencies();
	// }
};
