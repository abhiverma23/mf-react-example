const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 8082,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
});
