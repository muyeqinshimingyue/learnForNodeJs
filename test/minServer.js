/**
 *  测试 express4 框架 搭建 http服务器
 *
 *  搭建最min的Server
 */
var express = require("express");
var app = express();
var server = app.listen( getPort(process.env.PORT) );


server.on('listening',function () {
    console.log("服务启动中，服务地址是：http://localhost:%s",getPort(process.env.PORT) );
});



/**
 *  设置端口号
 * @param port
 * @returns {*}
 */
function getPort( port ){
    if( port &&  isNaN(port) ){
        return  port;
    }else
        return 80 ;
}