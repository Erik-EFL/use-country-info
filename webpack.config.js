const path = require('path');

module.exports = {
  entry: './src/index.js', // Caminho do arquivo de entrada do seu aplicativo
  output: {
    path: path.resolve(__dirname, 'dist'), // Caminho da pasta de saída para os arquivos gerados pelo Webpack
    filename: 'bundle.js', // Nome do arquivo de saída gerado pelo Webpack
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
  },
};
