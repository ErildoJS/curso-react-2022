const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map': 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),/** arq de entrada */
  output: {
    path: path.resolve(__dirname, 'dist'),/** arq que vou gerar */
    filename: 'bundle.js',/** nome do arq gerado */
  },
  resolve: {
    extensions: ['.js', '.jsx'],/** arq que ele pode ler */
  },
  devServer: {
    /**
     * static: {
      directory: path.resolve(__dirname, 'public')
    }
     */
    static: {
      directory: path.resolve(__dirname, 'dist')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    })
  ],
  module: {/** como a nossa app vai se comportar quando estivermos a importar os arqs */
     rules: [
       {
         test: /\.jsx$/,
         exclude: /node_modules/,
         use: 'babel-loader'/**integracao entre o babel eo webpack */
       },
       {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']/**integracao entre o babel eo webpack e css */
      }
     ]
  }
}