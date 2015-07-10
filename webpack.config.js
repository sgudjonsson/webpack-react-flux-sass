var path = require('path');
module.exports = {
    entry: './app/index.js',
    output: {
        path: __dirname,
        filename: 'dist.js'
    },
    resolve: {
      modulesDirectories: ['node_modules', './app'],
      extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader' },
          { test: /\.jsx$/, loader: 'babel-loader' },
          { test: /\.scss$/, loader: "style!css!sass?sourceMap" }
        ]
    }
};
