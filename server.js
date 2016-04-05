var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
config.entry.demo.unshift("webpack-dev-server/client?http://localhost:9090", "webpack/hot/dev-server");
config.entry.amaze.unshift("webpack-dev-server/client?http://localhost:9090", "webpack/hot/dev-server");

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: false
}).listen(9090, '127.0.0.1', function (err, result) {
        if (err) {
            console.log(err);
        }
        console.log('Listening at localhost:9090');
    });
