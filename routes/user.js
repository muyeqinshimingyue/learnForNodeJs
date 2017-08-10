/**
 *  编辑User路由 用于测试mongoose
 */
var express = require("express"); // 导入express模块
var router  = express.Router();  // 获取路由
var mongoose = require("mongoose"); // 导入mongoose模块

// 拦截所有请求
router.all("*",function (req,res,next){
    console.log(" request url " + req.url );
    next();
});

// 获取用户集合
router.get("/list",function (req,res) {
    var  User = mongoose.model("User");
    User.find({},function (error,docs) {
        if( error ){
            res.json({'error':error});
            return ;
        }
        res.json(docs);
    });
});

// 新增用户
router.get("/save",function (req,res) {
    var  User = mongoose.model("User");

    var  user = new User({
        id:1,
        username:'黎明',
        createTime:new Date()
    });
    user.save(user,function (error) {
        if( error ){
            res.json({'error':error});
            return ;
        }
        res.json({"success":"新增用户成功"});
    });
});



module.exports = router;   // 返回该路由