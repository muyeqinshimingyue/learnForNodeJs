/**
 *  使用express模块构建http服务器
 * @type {*|createApplication}
 */
var express = require("express");  // 载入express模块
var app =  express();           // 实例化express
var morgan = require("morgan"); // 载入日志中间件
app.use(morgan());        // 使用日志中间件

/*
 * static  express的中间件，用来处理静态文件，需要设置静态文件的路径
 *  当访问 http://localhost:3000/stylesheets/style.css 是express会自动到
 *   public/stylesheets/下寻找style.css文件
 */
app.use(express.static('../../public'));

/*
 *  app路由（route方式）
 */
app.route("/rout")
    .get(function (req,res){
        res.send("get 请求");
    })
    .post(function(req,res){
        res.send("post 请求");
});

/*
 *  app 路由(path方式)  拦截 / 请求
 */
app.all("/",function(req,res){
    res.send("hello");
});

// 监听端口
app.listen(3000,function () {
    console.log("express sever running ,url http://localhost:3000 ");
})