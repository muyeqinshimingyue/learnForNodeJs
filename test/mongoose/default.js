/**
 *  默认值
 */
var  mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test",{useMongoClient: true});
// 创建用户数据结构
var  UserSchema = new mongoose.Schema({
    userName:{
        type:String,
        default:"new user"  // 默认值的关键字是default 固定默认值
    },
    createTime:{
        type:Date,
        default:Date.now  // 默认是变化的
    }
});
// 注册schema
var  User = mongoose.model("User",UserSchema);
var  user = new User();
console.log( user  );  // 输出默认值