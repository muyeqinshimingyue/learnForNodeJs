/**
 *   使用Node.js的核心模块 创建TCP客户端
 */
var net = require("net");  // 导入Node.js的核心模块
const POST = 3000;          //  连接端口号
const HOST = '127.0.0.1';   // 连接地址
var tcpClient = net.Socket(); // 创建socket ，也就是客户端

// 发起连接
tcpClient.connect(POST,HOST,() =>{
    console.log("connect server success");
    tcpClient.write("message from client ");
});

// 监听数据接收
tcpClient.on("data",(data) =>{
    console.log("recerive meassage[%s] from server ",data.toString());
});