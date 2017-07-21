var express = require('express'); // 导入express模块
var router = express.Router(); // 创建路由对象

/*  拦截所有请求  */
router.all("*",function (req,res,next) {
    console.log(" 访问用户请求 ");

    next();  // 表示继续走下一个拦截器
})

router.get('/list', function(req, res, next) {
    res.send('获取用户列表');
})

module.exports = router;
