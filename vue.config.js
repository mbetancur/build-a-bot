module.exports = {
  configureWebpack: {
    module: {
      // learning about rules
      rules: [
        {
          test: /\.coffee$/,
          use: ['coffee-loader'],
        },
      ],
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
    },
  },
};
