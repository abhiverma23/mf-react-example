const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/micro-frontend/react/container/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
        auth: `auth@${domain}/auth/remoteEntry.js`,
        dashboard: `dashboard@${domain}/dashboard/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
});
