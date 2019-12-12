const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: {
		'dist/index': './src/index.js',
	},
	output: {
		path: path.resolve(__dirname),
		filename: '[name].js',
		library: 'formwell',
		libraryTarget: 'umd'
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

	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
		'reactstrap': 'Reactstrap',
	},

	optimization: {
		minimizer: [
			new TerserPlugin({
				terserOptions: {
				ecma: undefined,
				warnings: false,
				parse: {},
				compress: {},
				mangle: true,
				module: false,
				output: null,
				toplevel: false,
				nameCache: null,
				ie8: false,
				keep_classnames: undefined,
				keep_fnames: true, // change to true here
				safari10: false,
				},
			}),
		],
	}
};