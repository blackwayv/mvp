module.exports = {
  entry: './client/app.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: "file-loader",
      }
    ]
  },
  mode: 'production'
}