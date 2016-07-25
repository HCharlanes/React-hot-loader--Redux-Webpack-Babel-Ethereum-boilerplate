var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: [
	'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
	'webpack/hot/only-dev-server',
  './src/client/app/init.js', // "only" prevents reload on syntax errors
	'./src/client/app/index.jsx' // Your appʼs entry point
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module : {
    loaders : [
      { 
      	test: /\.jsx?$/,
      	loaders: ['react-hot', 'babel'], 
      	include: path.join(__dirname, 'src') 
      },
      {test: /\.json$/i, loader: "json"}
    ]
  }
};

module.exports = config;