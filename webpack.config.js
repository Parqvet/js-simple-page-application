const HTMLwebpackPlugin = require('html-webpack-plugin');
const { Plugin } = require('webpack');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    plugins: [
        new HTMLwebpackPlugin()
    ] 
}