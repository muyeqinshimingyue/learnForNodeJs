/**
 *  模式修饰符：预定义修饰符 和自定义修饰符(set)
 *  自定义修饰符(set) :用于赋值时，数据监测
 */
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test",{useMongoClient:true});
var User = mongoose.model("User",{  // 注册用户模型
    userName:{
        type:String,
        trim:true  // 预定义修饰符 ，用于去除字符串两头的空格
    },
    blog:{
        type:String,
        set:function( url ){  // 自定义修饰符，判断blog地址是否正常
            if( !url ) return '';
            if( !url.startsWith("http")   ){
                return "http://"+url;
            }
        }
    }
});

var user = new User({
    userName:"    iiii    ",
    blog:"eueuue.com"
});
console.log(user);