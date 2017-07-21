/**
 *  测试http服务器的三大对象  route  request  response
 * @type {*|createApplication}
 */
var  express = require("express");   // 导入第三方核心模块  express
var bodyParser = require("body-parser");    // 导入参数 转换对象
var path = require("path");


var app = express();   //  创建应用服务器  调用 createApplication 方法


/*  该路由的作用是拦截所用请求，对其中的post方式提交的Json参数进行解析，将其还原成Json对象  */
app.use( bodyParser.json() );
/*  该路由的作用是拦截所有请求，对其中的以urlencoded方式提交参数的请求进行解析  */
app.use( bodyParser.urlencoded( { extended:false} ) );

/*  该路由作用是设置静态文件所在位置 */
app.use( express.static( path.join(__dirname, 'public') )  );

/*  使用模块化路由配置  注意：使用 app.use  来调用 */
app.use( "/user" , require("../routes/users")  );

app.all("/",function (req,res) {
    res.send("hello") ;
});


var server = app.listen( getPort() );  // 启动服务，并监听端口

server.on( "listening",function () {   // 监听服务器
    console.log("服务器启动，地址 http://localhost:%s" , getPort() );
} );

/***    获取端口号    */
function getPort(){
    var port = process.env.PORT;
    if( port && isNaN( port ) ){
        port = parseInt( port );
        return  (port > 0 && port < 65536) ? port:85 ;
    }else  return  85;
}