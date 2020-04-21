module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './release/storage.js',
    library: 'storage',
    libraryTarget: 'umd',
    libraryExport: "default"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
}