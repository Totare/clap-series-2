const path = require('path');

module.exports = {
	mode:'development',
	entry: './resources/js/app.js',
	output: {
		path: path.resolve(__dirname, './public'),
		filename: './js/app.js',
		libraryTarget: 'var',
		library: 'LaunchGame'
	}
};