/**
 *  使用mongoose 模块测试连接mongodb
 * @type {*|Mongoose}
 */
var mongoose = require("mongoose"); // 引入模块
var uri = "mongodb://username:password@host:port/databasename"; // 路径
uri = "mongodb://localhost:27017/test";  // 选择本地Mongodb的test数据库

mongoose.connect(uri); // 连接mongodb

/*
 * 定义 schema ，用来指定Model 的 数据结构和类型
 */
var  BookSchema = new mongoose.Schema({
    name:String,
    author:String,
    publishTime:Date
});
// 注册model
mongoose.model("Book",BookSchema);

var  Book = mongoose.model("Book"); // 取出model
// 实例化
var book = new Book({
    name:" Node.js ",
    author:" AAAA ",
    publishTime:new Date()
});
book.author = " BBBBB ";  //  实例也可以在外部赋值

// 存储 error 如果有 便是存储失败 ，没有则成功
book.save( function( error){
    console.log( " save book %s",error ? "error":"success" );
} );

// 查询  返回的是对象数组
Book.find({},function(err,docs){  // 查询 传入查询条件 {}
    if ( err ){
        console.log(" select error ");
    }else{
        console.log("result:"+docs);
    }
});

// 查询第一个满足条件的文档  返回时对象
Book.findOne({"name":" Node.js "},function (erro,docs) {
    if ( erro ){
        console.log(" select error ");
    }else{
        console.log("result:"+docs);
    }
});

// 删除
Book.findOne({"name":" Node.js "},function (erro,docs) {
    if ( erro ){
        console.log(" select error ");
    }else{
        docs.remove();
        console.log("remove:"+docs);
    }
});

// 条件查询
var cond = {
    $or:[     // $or 表示 或者 即下面的条件是或者的关系  $and  与
        {"name":" Node.js "},
        {"author":"AAAA"}
    ]
};
Book.find(cond,function (erro,docs) {
    if ( erro ){
        console.log(" select error ");
    }else{
        // docs.remove();
        console.log("条件查询:"+docs);
    }
});
