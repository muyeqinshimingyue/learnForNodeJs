/**
 *  测试 koa的上下文对象
 *  api：http://koa.bootcss.com/
 */
var koa = require("koa");
var app = new  koa();

app.use( function * (){

    //this.throw(404,"name required");  // 抛出404错误 ，注意抛错误，一定要在输出之前

    this.body = "hello world";
    console.log(this);      // this 指代上下文对象，包含request、response对象
    console.log(this.request);
    console.log( "cookie中的值 ； "+ this.cookies.get("name") ); // 取出cookie中的值
    console.log(this.query ); //  获取查询参数
} );

app.listen(3000); // 监听3000端口