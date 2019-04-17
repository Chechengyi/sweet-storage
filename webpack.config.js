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
        loader: 'babel-loader'
      }
    ]
  }
}