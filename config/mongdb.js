/**
 *  获取数据库连接
 */
var  mongoose = require("mongoose");  // 导入mongoose 模块  模块在首次 require 时执行代码，之后的 require 都是之前的执行结果
var  config = require("./config");  // 导入配置文件模块   模块在首次 require 时执行代码，之后的 require 都是之前的执行结果
module.exports = function (){
    var  db = mongoose.connect( config.mongodb ); // 连接数据库

    require("../module/user.server.module.js"); // 引入用户对象

    return db ;  // 返回数据库连接
}