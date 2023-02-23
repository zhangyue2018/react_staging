const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/api1', { // api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
            target: "http://localhost:5000", // 配置转发目标地址(能返回数据的服务器地址)即：请求转发给谁
            changeOrigin: true, // 控制服务器收到的请求头中Host的值(host：服务器可以通过这个字段知道请求是从哪来的)
            /**
             * changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
             * changeOrigin设置为false时(默认)，服务器收到的请求头中的host为： localhost:3000
             */
            pathRewrite: {'^/api1': ''} // 重写请求路径(必须)--去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
        }),
        createProxyMiddleware('/api2', {
            target: "http://localhost:5001",
            changeOrigin: true,
            pathRewrite: {'^/api2': ''}
        }),
    );

}