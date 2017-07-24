/**
 *  使用 node_redis 连接redis 数据库
 *  测试字符串 对象 存储 获取
 */
var redis  = require("redis");  // 导入redis 模块
var client = redis.createClient(6379,"localhost"); // 创建连接

/**
 * 赋值 字符串
 * */
client.set( 'hello','123' );
/**
 *  获取值，注意此处是IO操作，是异步的
 */
client.get("hello",function (error,data) {
    console.log(" get data from redis for hello : %s ",data );
})

/**  修改原型连的toString（） 不推荐 */
/*
Object.prototype.toString =function (){
    return JSON.stringify(this);
}
*/

/**
 * 存储对象 注意：redis是不能存储对象的，需要将其转化成序列号字符串，
 * 否则取出是字符串,但是可以修改toString（）来实现（不推荐）
 */
// client.set('helloO',{name:123,age:1});
client.get("helloO",function (error,data) {
    console.log(" get data from redis for helloO : %s ",  typeof data );  // 获得结果是字符串
})