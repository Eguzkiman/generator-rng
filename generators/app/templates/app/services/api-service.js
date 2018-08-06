export default {
	// Replace with your own
	host: 'https://www.googleapis.com',

	getBooks () {
		return this.makeRequest({
			url: `${this.host}/books/v1/volumes?q=isbn:0747532699`
		});
	},

	makeRequest ({ url=null, method='GET', data={}, headers={} }) {
		let options = {
			method,
			headers,
			// body: JSON.stringify(data)
		};

		if (method === 'POST' || method == 'PUT')
			options.body = JSON.stringify(data);

		return fetch(url, options);
	}
};
