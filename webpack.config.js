const path = require('path');
const TSLintConfiguration = require('./tslint.json');
module.exports = {
  mode: 'production',
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'afl.min.js',
    libraryTarget: 'umd',
    library: 'afl',
    umdNamedDefine: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: ['.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader',
            options: {
              configuration: TSLintConfiguration,
              fix: true
            }
          }
        ]
      },
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
};
