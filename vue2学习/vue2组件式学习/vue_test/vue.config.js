module.exports = {
    //
    pages: {
        index: {
            //入口文件
            entry: 'src/main.js',
        },
    },
    lintOnSave: false,//关闭语法检查

    devServer: {
        //开启代理服务器(方式一）
        // proxy:'http://localhost:5000'
        // 开启代理服务器(方式二）
        proxy: {
            '/aigiugu': {
                target: 'http://localhost:5000',
                pathRewrite:{'^/aigiugu':''},
                ws: true,//用于支持websocket
                // changeOrigin: false //另一个服务器说是8080端口
                changeOrigin: true  //向别一个服务器说是5000端口 用于控制请求头中的host值
            },
            '/demo': {
                target: 'http://localhost:5001',
                pathRewrite:{'^/demo':''},
                ws: true,//用于支持websocket
                // changeOrigin: false //另一个服务器说是8080端口
                changeOrigin: true  //向别一个服务器说是5000端口 用于控制请求头中的host值
            }
        }
    }
}