/**
 *  使用 node_redis 连接redis 数据库
 *
 *   测试消息的订阅与发布
 */
var redis = require("redis");
var client = redis.createClient(6379,"localhost");

// 消息订阅（ 发布名  ）
client.subscribe("messagePubli");

// 监听消息 ( 频道 ，内容 )
client.on("message",function(channel,msg){
    console.log("频道是：%s,内容是：%s",channel,msg);
});