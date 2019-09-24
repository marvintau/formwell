const path = require('path');

module.exports = {
	entry: {
		'dist/formwell.dist': './src/Formwell.js',
		'test/app.dist' : './test/App.js'
	},
	output: {
		path: path.resolve(__dirname),
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: "babel-loader"
					},
					{
						loader: "react-svg-loader",
						options: {
							jsx: true // true outputs JSX tags
						}
					}
				]
			},
	　　　　{
	　　　　　　test: /\.(png|jpg)$/,
	　　　　　　loader: 'url-loader?limit=8192'
	　　　　}
		]
	},

	mode: 'development',
};