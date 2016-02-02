var path = require('path');


module.exports = [
	{
		entry: [
			// 'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
			//'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
			//'./scripts/index' // Your appʼs entry point
			'./main.js'
		],
		output: { // where should webpack output the files
			path: path.join(__dirname, "public", "js"),
			filename: "bundle.js"
			// publicPath: "http://localhost:8080/public/js/"
		},
		module: {
			loaders: [
				{ 
					test: /\.jsx?$/, // what to match
					exclude: /node_modules/,
					loader: 'babel-loader',
					query: {
						presets: ["es2015", "react", "stage-2"]
					}
				}
			]
		}
	}
];