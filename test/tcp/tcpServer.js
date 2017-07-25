/**
 *  使用Node.js的核心模块 创建TCP服务器
 *  可以采用 Telnet 连接测试
 *  api : https://nodejs.org/dist/latest-v8.x/docs/api/net.html#net_net_createserver_options_connectionlistener
 */
var net = require("net");  // 导入Node.js的核心模块
/*
 *  创建连接监听器 ，其传入的对象是socket类
 */
var connectionListener= function (socket) {
    console.log(" someone connnet ");
    // 监听数据接收
    socket.on("data",(data) =>{
        // tcp 服务传输的数据是二进制数据，如果不使用toString（），就会显示二进制
        console.log("receiver data[%s] from client[%s:%s]",data.toString(),socket.remoteAddress,socket.remotePort);
        socket.write(" message from server "); // 服务端发送信息给客户端
    } );
    // 监听结束事件
    socket.on("end",(data)=>{
        console.log(data);
    });

    // 监听关闭事件
    socket.on("close",function(){
        console.log("client[%s:%s] disconnetced ",socket.remoteAddress,socket.remotePort);
    });

}
var TCPServer = net.createServer( connectionListener ); // 创建Tcp服务器的实例

// 添加监听端口（端口必选，其他可选）
TCPServer.listen(3000,'127.0.0.1',()=>{
    console.log("tcp server running ");
})