const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackplugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map': 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),/** arq de entrada */
  output: {
    path: path.resolve(__dirname, 'dist'),/** arq que vou gerar */
    filename: 'bundle.js',/** nome do arq gerado */
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],/** arq que ele pode ler */
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
    isDevelopment && new ReactRefreshWebpackplugin,
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    })
  ].filter(Boolean),
  module: {/** como a nossa app vai se comportar quando estivermos a importar os arqs */
     rules: [
       {
         test: /\.(j|t)sx$/,
         exclude: /node_modules/,
         use: {
           loader: 'babel-loader',/**integracao entre o babel eo webpack */
           options: {
             plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
             ].filter(Boolean)
           }
         }
       },
       {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']/**integracao entre o babel eo webpack e css */
      }
     ]
  }
}