/**
 *  测试koa框架
 *  在项目目录下安装koa项目 npm i --save koa
 *  运行  node hello_world.js
 */
var koa = require('koa');  // 载入koa模块
var app = new koa();

app.keys = ['im a newer secret', 'i like turtle']; // 设置秘钥

// app.use 引入中间件
app.use(function *(){     // function * genatetors 方式编程
    this.body = 'Hello World';  //  koa 会自动识别内容的格式，如果是json，就返回json，字符串就返回字符串

    this.body={"name":123};

    // 设置cookie 签名 signed: true 不可删出 防止恶意修改cookie
    this.cookies.set('name', 'tobi', { signed: true });
});

// koa 是支持多端口监听的
app.listen(3000);
app.listen(3001);

