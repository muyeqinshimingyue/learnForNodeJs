/**
 *  虚拟属性
 */
var mongoose = require("mongoose");
var PersonSchema = new mongoose.Schema({
    firstName:String,
    lastName:String
});
// 设置虚拟属性 使用
PersonSchema.virtual("fullName").get(function(){
    return this.firstName + " " + this.lastName;
});
// 设置虚拟属性在转换为json时 ,有效
PersonSchema.set("toJSON",{getters:true,virtual:true});

var Person = mongoose.model("Pserson",PersonSchema);

var person = new Person({
    firstName:"HAHAH",
    lastName:"123"
});

console.log( person.fullName );
console.log( JSON.stringify(person)  );