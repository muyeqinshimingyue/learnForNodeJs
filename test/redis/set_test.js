/**
 *  使用 node_redis 连接redis 数据库
 *  操作集合
 *  集合于列表区别：集合会去重，列表不会去重
 */

var redis = require("redis");
var client = redis.createClient(6379,"localhost");

client.sadd("testSet",1);
client.sadd("testSet",'a');
client.sadd("testSet",'b');
client.smembers( "testSet",function (error ,data){
    console.log( " 集合数据： "+data );
} );

console.log("连接成功");