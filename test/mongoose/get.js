/**
 *  自定义修饰符（get修饰：取值时进行过滤 ）
 */
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/test",{useMongoClient:true});// 连接数据库
var User = mongoose.model("User",{
    blog:{
        type:String,
        get:function( url ){  // 自定义修饰符 （get）
            if( !url ) return "";
            if( !url.startsWith("http") ){
                return "http://"+url;
            }
        }
    }
});
var user = new User({
    blog:"cccc.com"
});
console.log( user.blog );
/*user.save(function(){
    console.log( user.blog );
})*/
