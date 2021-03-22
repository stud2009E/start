const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: path.join(__dirname, "src", "App.jsx"),
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /(\.js|\.jsx)$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env", "@babel/react"]
                }
            },
            exclude: /node_modules/,
            include: path.join(__dirname, "src")
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack App",
            template:  path.join(__dirname, "assets", "template.html")
        })
    ]
}