const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:3000'

module.exports = defineConfig({
  transpileDependencies: true,
  devServer : {
    port:8080,
    proxy : {
      '^/':{ //통신을 시도할때 사용하는 주소.../로시작하는 모든경로에 이 proxy설정을 적용하겠다
        target,
        changeOrigin : true //기본값은 F
      }
    }
  }
})
