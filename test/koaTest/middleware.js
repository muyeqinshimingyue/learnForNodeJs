/**
 *  测试koa的中间件
 *  Koa 的中间件通过一种更加传统（您也许会很熟悉）的方式进行级联，摒弃了以往 node
 *  频繁的回调函数造成的复杂代码逻辑。 我们通过 generators 来实现“真正”的中间件。
 *  Connect 简单地将控制权交给一系列函数来处理，直到函数返回。 与之不同，当执行到
 *  yield next 语句时，Koa 暂停了该中间件，继续执行下一个符合请求的中间件('downstrem')，
 *  然后控制权再逐级返回给上层中间件('upstream')。

 *  下面的例子在页面中返回 "Hello World"，然而当请求开始时，请求先经过 x-response-time
 *  和 logging 中间件，并记录中间件执行起始时间。 然后将控制权交给 reponse 中间件。当
 *  中间件运行到 yield next 时，函数挂起并将控制前交给下一个中间件。当没有中间件执行
 *  yield next 时，程序栈会逆序唤起被挂起的中间件来执行接下来的代码。
 */
var koa = require('koa');
var app = new koa();

// x-response-time
app.use(function *(next){
    var start = new Date;
    yield next;  // 暂停运行
    var ms = new Date - start;
    this.set('X-Response-Time', ms + 'ms');
});

// logger
app.use(function *(next){
    var start = new Date;
    yield next; // 暂停运行
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

// response
app.use(function *(){
    this.body = 'Hello World';
});

app.listen(3000);