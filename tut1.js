// fs module
// const fs = require("fs");
// let text = fs.readFileSync("any.txt","utf-8")
// text = text.replace()
// console.log(`the content of file is \n${text}`)
// console.log();

// synchronous
// let a = require("fs");
// let content = a.readFileSync("any.txt","utf-8")
// console.log(content)
// asyncronous
let fs = require("fs");
let text = fs.readFile("any.txt","utf-8",(error,data)=>{
    console.log(data)
});
console.log("message for u");



