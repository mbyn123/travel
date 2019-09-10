const path = require('path');
function resolve(dir) {
    return path.join(__dirname,dir);
}

module.exports={
    chainWebpack:config=>{
        config.resolve.alias
            .set('styles',resolve('src/assets/styles'))//修改路径别名
    },
    // baseUrl: '/',
    devServer: {
        proxy: { //proxy 代理 跨域
            '/api': {
                target: 'http://localhost:8080',
                // changeOrigin: true,
                // ws: true,
                pathRewrite: {
                    '^/api': 'mock'
                }
            }
        }
    }
}
