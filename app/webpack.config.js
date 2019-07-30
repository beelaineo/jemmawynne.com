/* eslint-disable @typescript-eslint/no-var-requires */

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
require('dotenv').config()
const CopyPlugin = require('copy-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')

const PATHS = {
	root: path.resolve(__dirname),
	nodeModules: path.resolve(__dirname, 'node_modules'),
	src: path.resolve(__dirname, 'src'),
	dist: path.resolve(__dirname, 'build'),
	js: 'static/js',
}

const DEV_SERVER = {
	hot: true,
	hotOnly: true,
	historyApiFallback: true,
	overlay: true,
	contentBase: path.resolve(__dirname, 'public'),
	proxy: {
		'/.netlify': {
			target: 'http://[::1]:9000',
			pathRewrite: { '^/.netlify/functions': '' },
		},
	},
}

module.exports = (env) => {
	const isDev = env !== 'production'
	return {
		mode: isDev ? 'development' : 'production',
		cache: true,
		devtool: isDev ? 'eval-source-map' : 'source-map',
		devServer: isDev ? DEV_SERVER : {},
		context: PATHS.root,
		entry: isDev ? ['./src/index.tsx'] : './src/index.tsx',
		output: {
			path: PATHS.dist,
			filename: isDev
				? `${PATHS.js}/[name].js`
				: `${PATHS.js}/[name].[hash].js`,
			publicPath: '/',
		},
		resolve: {
			plugins: [new TsconfigPathsPlugin()],
			extensions: ['.mjs', '.ts', '.tsx', '.js'],
			alias: isDev
				? {
						'react-dom': '@hot-loader/react-dom',
				  }
				: {},
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					include: PATHS.src,
					use: [
						// isDev ? { loader: 'react-hot-loader/webpack' } : null,
						// { loader: 'babel-loader' },
						{
							loader: 'awesome-typescript-loader',
							options: {
								useBabel: true,
								// babelOptions: {
								// 	babelrc: false /* Important line */,
								// 	presets: [
								// 		[
								// 			'@babel/preset-env',
								// 			{ targets: 'last 2 versions, ie 11', modules: false },
								// 		],
								// 	],
								// },
								babelCore: '@babel/core', // needed for Babel v7
								transpileOnly: !isDev,
								useTranspileModule: false,
								sourceMap: true,
								// getCustomTransformers: () => ({
								// 	before: [styledComponentsTransformer],
								// }),
							},
						},
					].filter(Boolean),
				},
			],
		},
		plugins: [
			new CheckerPlugin(),
			new HardSourceWebpackPlugin(),
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(
					isDev ? 'development' : 'production',
				),
				SHOPIFY_STOREFRONT_TOKEN: JSON.stringify(
					process.env.SHOPIFY_STOREFRONT_TOKEN,
				),
			}),
			new HtmlWebpackPlugin({
				template: './public/index.html',
			}),
			// isDev && new webpack.HotModuleReplacementPlugin(),
			isDev && new webpack.NamedModulesPlugin(),
			!isDev &&
				new webpack.LoaderOptionsPlugin({
					minimize: true,
					debug: false,
				}),
			!isDev && new CopyPlugin([{ from: './public/' }]),
		].filter(Boolean),
		optimization: {
			minimize: !isDev,
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
						filename: isDev
							? `${PATHS.js}/vendor.[hash].js`
							: `${PATHS.js}/vendor.[contentHash].js`,
						priority: -10,
					},
				},
			},
			runtimeChunk: true,
		},
	}
}
