//vue.config.js// 别名配置
module.exports = {
  configureWebpack:{
    resolve: {
      extensions:[],
      alias:{ //解决路径 配置别名
        'assets':'@/assets',
        'commonjs':'@/commonjs',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
}
