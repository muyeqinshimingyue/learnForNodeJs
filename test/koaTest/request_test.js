/**
 *  测试koa的 request对象
 */
var koa = require( "koa");  // 载入koa
var app = new koa();        // 实例化

app.use( function * (){
    var  path =   this.request.url;  // 获取访问的url
    path = path.replace(/\/$/,"");    // 去除最后一个反斜杠
    console.log(" 请求路径是: %s " ,path );

    if( "/test" == path  ){
        this.body="测试";
    }else{
        this.body="hello world";
    }



} );

app.listen(3000);  //  监听并启动web服务