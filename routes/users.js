/**
 *  测试http服务器的三大对象  route  request  response
 * @type {*|createApplication}
 */
var express = require('express'); // 导入express模块
var router = express.Router(); // 创建路由对象

/*  拦截所有请求  */
router.all("*",function (req,res,next) {

    console.log(" *****************   拦截所有访问用户请求  *********************** ");
    //   请求的URL  req.url 与 req.path 区别：req.url  如果请求的Url带有参数，它会获取到参数信息，但是path不会
    console.log("请求的URL访问地址:  " + req.url );        //  请求的URL /list?id=100001
    console.log("请求的URL方法： " +  req.method );       //   请求的URL方法
    console.log("请求的URL是： " +  req.path );          //    请求的URL  /list
    console.log("获取路由的基础路径：" +  req.baseUrl );  // 获取路由的基础路径：/user


    console.log( "\n" );
    console.log( " 请求头部信息如下：" );
    console.log( req.headers );  // 请求头部信息 ，该信息是一个对象
    console.log( "" );
    console.log( " 请求头中‘user-agent’ 信息： " + req.headers["user-agent"] );  // 请求头中的某个信息
    console.log( " 请求头中‘user-agent’ 信息： " + req.get("user-agent") );       // 请求头中的某个信息
    console.log(  " 请求头中‘ host’ 信息： " + req.headers.host );                 // 请求头中的某个信息
    console.log(  " 请求头中‘ host’ 信息： " + req.header("host") );               // 请求头中的某个信息


    console.log( req.query );  // 获取get方式提交的查询参数 是一个对象  { id: '100001' }
    console.log("查询参数中的ID的值:   " + req.query.id );  // 获取提交的查询参数 是一个对象  { id: '100001' }

    console.log( req.body );   // 获取post方式提交的参数对象  { name: '1232', as: '328' }
    console.log( "post参数中的name的值:   " + req.body.name ); // 获取post方式中的某个参数


    next();  // 表示继续走下一个拦截器
})
/*  获取用户列表  */
router.get('/list', function(req, res, next) {
    res.send('get 方式  获取用户列表');
})

/*  获取用户列表  */
router.post('/list', function(req, res, next) {
    res.send('post 方式 获取用户列表');
})

/*  rest风格  获取URL中的参数  */
router.all('/get/:id', function(req, res, next) {
    res.send(' 获取 rest风格  用户的信息,用户ID是'+ req.params.id);
})

/*  res对象设置响应吗   */
router.get('/fb', function(req, res) {
    res.status(403).send('您没有访问当前资源的权限！');
})

/*  res对象 发送js文件   */
router.get('/js', function(req, res) {
    res.contentType("application/javascript"); // 设置文件格式为 js
    res.sendFile( "index.js",{root:"../routes"} );  // 发送文件，设置文件名，及路径
})

/*  res对象 发送json 对象   */
router.get('/json', function(req, res) {
    res.json({"name":123213,"age":12});
})



module.exports = router;   // 返回该路由
