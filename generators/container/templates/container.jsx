import React, { Component } from 'react';

import ApiService from '<%= appName %>/app/services/api-service';

const <%= camelizedContainerName %> = (data) => WrappedComponent => {
	class <%= pascalizedContainerName %> extends Component {

		constructor (props) {
			super(props);
			this.state = {
				data: []
			};
		}

		componentDidMount() {
			// Use your own fetch method
			ApiService.getBooks()
				.then((data) => {
					this.setState({ data });
				})
				.catch((err) => {
					// Handle error
				});
		}

		componentWillUnmount() {
			this.props.clearTimeouts()
		}

		render() {
			return <WrappedComponent data={this.state.data} {...this.props} />
		}
	}

	return <%= pascalizedContainerName %>;
}

export default <%= camelizedContainerName %>;
