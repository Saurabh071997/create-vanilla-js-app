const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


let mode = "development"

if(process.env.NODE_ENV === "production"){
	mode = "production"
}

const webpackConfig = {
	entry: path.resolve(__dirname, "src", "index.js"),

	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean: true 
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},

			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"]
			},

			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset"
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: "Vanilla JS Starter",
			template: path.resolve(__dirname, "src", "index.html")
		})
	],

	
	devtool: "inline-source-map",
	devServer: {
    	contentBase: './dist',
    	port: 3000
	},

    mode:mode


};

module.exports = webpackConfig;