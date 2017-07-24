/**
 *  使用 node_redis 连接redis 数据库
 *  测试redis 列表
 *  列表是不去重的
 *
 */
var redis = require("redis");
var client = redis.createClient(6379,"localhost");

/**
 *  操作列表  类似于java中的数组
 */
/*
client.rpush( "rlist",'a' );  // 从右面向列表rlist 中添加值 就是往后添加值
client.rpush( "rlist",'b' );
client.rpush( "rlist",'c' );
*/
client.rpush( "rlist",1 );
client.lpush("rlist",2);        // 从左面向列表中添加值，也就是在前面添加值


client.lpop("rlist",function(error,data ){  // 从左面弹出第一个元素
    console.log( "从左面弹出第一个元素"+data );
});

client.rpop("rlist" ,function (error,data) {
    console.log( "从左面弹出第一个元素"+data ); // 从右面弹出第一个元素
});

// 从列表中取值 0 表示 左边的第一个 ，-1表示右边的第一个   > 0表示左边 < 0 表示右边
client.lrange( "rlist",0,-1,function (error,lists) {
    console.log( " 列表数据： "+lists );
} );