module.exports = (paths, env) => ({
  historyApiFallback: true,
  port: 3000,
  hot: true,
  host: '0.0.0.0',
  static: {
    directory: paths.dist,
  },
  proxy: [
    {
      target: env.API_URI,
      context: ['/api'],
      changeOrigin: true,
      secure: false,
    },
  ],
});
