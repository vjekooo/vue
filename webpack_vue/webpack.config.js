
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpackMerge = require('webpack-merge')
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env)
const presetConfig = require('./build-utils/loadPresets')
const commonPaths = require('./build-utils/common-paths')

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
	return webpackMerge(
		{
			mode,
			entry: {
				polyfill: '@babel/polyfill',
				vendor: ['vue']
			},
			output: {
				path: commonPaths.outputPath
			},
			resolve: {
				extensions: ['.js', '.vue', '.json']
			},
			module: {
				rules: [
					{
						test: /\.vue$/,
						include: commonPaths.appEntry,
						loader: 'vue-loader'
					},
					{
						test: /\.js$/,
						include: commonPaths.appEntry,
						loader: 'babel-loader'
					},
					{
						test: /\.json$/,
						use: 'json',
						include: commonPaths.appEntry
					},
					{
						test: /\.(gif|png|jpe?g|svg)$/i,
						include: `${commonPaths.appEntry}/assets/images`,
						use: [
							{
								loader: 'file-loader',
								options: {
									name: 'assets/images/[hash:8]-[name].[ext]'
								}
							},
							{
								loader: 'image-webpack-loader',
								options: {
									mozjpeg: {
										progressive: true,
										quality: 70
									},
									optipng: {
										optimizationLevel: 7
									},
									pngquant: {
										quality: '65-90',
										speed: 4
									},
									gifsicle: {
										interlaced: false
									}
								}
							}
						]
					}
				]
			},
			optimization: {
				runtimeChunk: 'single',
				splitChunks: {
					cacheGroups: {
						vendor: {
							chunks: 'initial',
							test: 'vendor',
							name: 'vendor',
							enforce: true
						}
					}
				},
				minimizer: [
					new UglifyJsPlugin({
						cache: true,
						parallel: true,
						sourceMap: true
					}),
					new OptimizeCSSAssetsPlugin({})
				]
			},
			plugins: [
				new VueLoaderPlugin(),
				new HtmlWebpackPlugin({
					template: `public/index.html`,
					chunksSortMode: 'dependency'
				}),
				new webpack.ProgressPlugin(),
			]
		},
		modeConfig(mode),
		presetConfig({ mode, presets })
	)
}
