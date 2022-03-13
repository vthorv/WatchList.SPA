const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://localhost:7131',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' }
      }
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
}
