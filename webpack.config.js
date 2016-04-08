const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
	context: __dirname,
	devtool: 'inline-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./app/app.jsx'
	],
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['', '.jsx', '.js', '.json'],
		modulesDirectories: [
			'node_modules',
			path.resolve(__dirname, './node_modules')
		]
	},
	module: {
		loaders: [
			{
				test: /(\.js|\.jsx)$/,
				exclude: /(node_modules)/,
				loader: 'babel'
			},
			{
				test: /(\.css)$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.json$/,
				loader: 'json'
			}
		]
	},
	postcss: [autoprefixer],
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};
