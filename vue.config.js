module.exports = {
  //配置别名
  configureWebpack: {
    //解决路径相关的东西
    resolve: {
      // extensions: [],
      alias: {
        // 配置别名
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
