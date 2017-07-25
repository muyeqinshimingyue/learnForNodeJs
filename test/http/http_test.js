/**
 *  测试使用Node.js的核心模块创建http服务器
 */
var http = require("http");  //引入http 核心模块
// 请求监听
var  requestListen = function ( req,res){
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
    res.write("欢迎访问");
    res.end();
}
// 创建http服务器 requestListen 需要在服务器创建前确定,否则就是undefined
var httpServer = http.createServer( requestListen );

httpServer.listen(3000); // 监听3000端口
// 添加监听事件监听
httpServer.on("listening",function () {
    console.log("http server running ,url:http://localhost:3000");
});