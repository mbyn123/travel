const path = require('path');
function resolve(dir) {
    return path.join(__dirname,dir);
}

module.exports={
    chainWebpack:config=>{
        config.resolve.alias
            .set('styles',resolve('src/assets/styles'))//修改路径别名
    }
}
