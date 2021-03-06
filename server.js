const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true
}).listen(3000, 'localhost', function(err, result) {
	if (err) {
		console.log(err);
	}
	console.log('Servidor rodando na porta: 3000');
});
