var path = require("path");
var webpack = require("webpack");
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
    entry: {
        demo: ["./source/components/demo/index.jsx"],
        amaze: ["./source/components/amaze/index.jsx"],
    },
    output: {
        path: path.resolve(__dirname, "assets"),
        publicPath: "/assets/",
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    },
    //plugins: [commonsPlugin]
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
};