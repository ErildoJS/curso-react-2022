module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {
      runtime: 'automatic'/** possibilita nao importar mais o react nod arqs */
    }]
  ]
}