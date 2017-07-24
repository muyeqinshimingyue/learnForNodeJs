/**
 *  使用 node_redis 连接redis 数据库
 *
 *   测试消息的订阅与发布
 */
var  redis = require("redis");
var client = redis.createClient(6379,"localhost");

// 设置消息发布 ( 发布名，内容 )
client.publish("messagePubli","message from public 消息来源发布");