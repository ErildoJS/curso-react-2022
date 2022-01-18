const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, "src", "index.jsx"),/** arq de entrada */
  output: {
    path: path.resolve(__dirname, "dist"),/** arq que vou gerar */
    filename: "bundle.js",/** nome do arq gerado */
  },
  resolve: {
    extensions: ['.js', '.jsx'],/** arq que ele pode ler */
  },
  module: {/** como a nossa app vai se comportar quando estivermos a importar os arqs */
     rules: [
       {
         test: /\.jsx$/,
         exclude: /node_modules/,
         use: 'babel-loader'/**integracao entre o babel eo webpack */
       }
     ]
  }
}