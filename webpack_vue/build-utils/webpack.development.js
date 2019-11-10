
const commonPaths = require('./common-paths')
const webpack = require('webpack')

const port = process.env.PORT || 3000

module.exports = env => ({
	mode: env.mode,
	entry: {
		app: [`${commonPaths.appEntry}/index.js`]
	},
	output: {
		filename: '[name].[hash].js'
	},
	module: {
		rules: [
			{
				test: /\.(s*)css$/,
				use: [
					'vue-style-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			}
		]
	},
	devtool: 'inline-source-map',
	devServer: {
		host: 'localhost',
		historyApiFallback: true,
		open: true,
		hot: true,
		stats: 'minimal',
		port: port,
		overlay: {
			errors: true,
			warnings: true
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
})
