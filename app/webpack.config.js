/* eslint-disable @typescript-eslint/no-var-requires */

const webpack = require('webpack')
const path = require('path')
const package = require('./package.json')
const { TsConfigPathsPlugin } = require('awesome-typescript-loader')
const env = require('dotenv').config()

const { parsed } = env

// variables
const isProduction = process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production'
const sourcePath = path.join(__dirname, './src')
const outPath = path.join(__dirname, './build')

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')

module.exports = {
	context: sourcePath,
	entry: {
		app: './index.tsx',
	},
	output: {
		path: outPath,
		publicPath: '/',
		filename: isProduction ? '[contenthash].js' : '[hash].js',
		chunkFilename: isProduction ? '[name].[contenthash].js' : '[name].[hash].js',
	},
	target: 'web',
	resolve: {
		extensions: ['.js', '.ts', '.tsx'],
		// Fix webpack's default behavior to not load packages with jsnext:main module
		// (jsnext:main directs not usually distributable es6 format, but es6 sources)
		mainFields: ['module', 'browser', 'main'],
		alias: {
			app: path.resolve(__dirname, 'src/app/'),
		},
		plugins: [new TsConfigPathsPlugin()],
	},
	module: {
		rules: [
			// .ts, .tsx
			{
				test: /\.tsx?$/,
				use: [
					!isProduction && {
						loader: 'babel-loader',
						options: { plugins: ['react-hot-loader/babel'] },
					},
					'ts-loader',
				].filter(Boolean),
			},
			// static assets
			{ test: /\.html$/, use: 'html-loader' },
			{ test: /\.(a?png|svg)$/, use: 'url-loader?limit=10000' },
			{
				test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/,
				use: 'file-loader',
			},
		],
	},
	optimization: {
		splitChunks: {
			name: true,
			cacheGroups: {
				commons: {
					chunks: 'initial',
					minChunks: 2,
				},
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					chunks: 'all',
					filename: isProduction ? 'vendor.[contenthash].js' : 'vendor.[hash].js',
					priority: -10,
				},
			},
		},
		runtimeChunk: true,
	},
	plugins: [
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
			DEBUG: false,
		}),
		new webpack.DefinePlugin({
			SHOPIFY_STOREFRONT_TOKEN: JSON.stringify(parsed.SHOPIFY_STOREFRONT_TOKEN),
		}),
		new WebpackCleanupPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html',
			minify: {
				minifyJS: isProduction,
				minifyCSS: isProduction,
				removeComments: !isProduction,
				useShortDoctype: true,
				collapseWhitespace: true,
				collapseInlineTagWhitespace: true,
			},
			append: {
				head: `<script src="//cdn.polyfill.io/v3/polyfill.min.js"></script>`,
			},
			meta: {
				title: package.name,
				description: package.description,
				keywords: Array.isArray(package.keywords) ? package.keywords.join(',') : undefined,
			},
		}),
	],
	devServer: {
		contentBase: sourcePath,
		hot: true,
		port: 8080,
		inline: true,
		historyApiFallback: {
			disableDotRule: true,
		},
		stats: 'minimal',
		clientLogLevel: 'warning',
	},
	// https://webpack.js.org/configuration/devtool/
	devtool: isProduction ? 'hidden-source-map' : 'cheap-module-eval-source-map',
	node: {
		// workaround for webpack-dev-server issue
		// https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
		fs: 'empty',
		net: 'empty',
	},
}
