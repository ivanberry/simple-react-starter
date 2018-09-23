const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlPlugin = new HtmlWebpackPlugin({
	template: "./src/index.html",
	filename: "./index.html"
});

module.exports = {
	entry: path.resolve(__dirname, "src/index.js"),
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							modules: true
						}
					}
				]
			}
		]
	},
	plugins: [htmlPlugin]
}