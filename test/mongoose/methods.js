/**
 *  模型方法测试：自定义静态方法、自定义实例方法
 */
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test",{useMongoClient:true});
var BookSchema = new mongoose.Schema({
    name:String,
    isbn:Number
});
// 自定义静态方法 通过isbn查询数据，传给回调函数
BookSchema.statics.findByIsbn = function (isbn,callback) {
    this.findOne({isbn:isbn},function (error,doc) {
        callback(error,doc);
    })
};
// 自定义实例方法
BookSchema.methods.printInfo = function(){
    console.log(JSON.stringify(this));
};
var Book = mongoose.model("Book",BookSchema);
Book.findByIsbn(123456,function(error,doc){  // 静态方法 使用模型调用
    console.log(doc);
});
var book = new Book({ isbn:123456,name:"hdhdhdhh" });
book.printInfo();  // 实例方法使用普通实例调用