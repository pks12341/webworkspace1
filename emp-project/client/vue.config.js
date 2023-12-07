const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:3000'

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false, //컴포넌트 이름 2단어 이상 요구하는걸 무력화
  devServer : { //개발하는동안만 사용..완성되면 이 설정자체를 뺸다
    port:8080,
    proxy : {
      '^/api':{ //통신을 시도할때 사용하는 주소.../로시작하는 모든경로에 이 proxy설정을 적용하겠다
        target,
        changeOrigin : true, //기본값은 F
        ws : false, // 웹 소켓 반복에러?없애줌?
        pathRewrite : { '^/api' : '/' } //   ^/api로 시작하는걸 /로 바꾸겠다..userlistview 47행 http://localhost:3000/api/users에서 api는 없으니..
      }
    }
  }
})
