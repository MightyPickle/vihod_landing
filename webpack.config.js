const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const config = {
	mode: isProduction ? 'production' : 'development',
	entry: {
		main: './src/index.tsx',
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'build'),
		},
		port: 3000,
		hot: true,
        historyApiFallback: true,
		compress: true,
		client: {
			overlay: true,
			progress: true,
		},
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
							'@babel/preset-typescript',
						],
					},
				},
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/[name][contenthash][ext][query]',
				},
			},
		],
	},
	resolve: {
		alias: {
			components: path.join('src', 'components'),
			pages: path.join('src', 'pages'),
			assets: path.join('src', 'assets'),
		},
		modules: [__dirname, 'src', 'node_modules'],
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template:  path.resolve(__dirname,'/public/index.html'),
			// favicon: './public/favicon.ico',
			chunksSortMode: 'manual',
		}),
	],
	output: {
		chunkFilename: '[name].[fullhash].js',
		filename: chunks => {
			return '[name].[fullhash].js';
		},
		assetModuleFilename: '[name].[fullhash][ext][query]',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		clean: true,
	},
	optimization: {
		minimize: isProduction,
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				}
			}
		},
		runtimeChunk: 'single',
	},
	performance: {
		hints: false
	}
};

if (!isProduction) {
	config.devtool = 'inline-source-map';
}

module.exports = config;