/**
 *  设置user对象及其数据类型
 */
var mongoose = require('mongoose');   // 引入模块  模块在首次 require 时执行代码，之后的 require 都是之前的执行结果
var UserScheme = new mongoose.Schema({  // 设置数据类型
    id:Number,
    username:String,
    password:String,
    createTime:Date,
    updateTime:Date
});
mongoose.model("User",UserScheme); // 注册用户对象