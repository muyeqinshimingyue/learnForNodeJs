/**
 *  mongoose 设置索引
 */
var  mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test",{useMongoClient:true})
var BookSchema = new mongoose.Schema({
    isbn:{
        type:Number,
        unique:true  //  添加唯一索引 ( 不能限制数据)
    },
    name:{
        type:String,
        index:true   // 添加普通索引，增加查询速度
    }
});
var Book = mongoose.model("Book",BookSchema);

var  book = new  Book({
    isbn:12134567890,
    name:"哈哈哈哈"
});
book.save(function(error){
    if( error ) console.log(error);
 });
console.log("添加完成");
Book.find(function(error,docs){
    console.log( JSON.stringify(docs) );
})