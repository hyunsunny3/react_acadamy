//불러오는 파일이 객체형식으로 내보내졌으므로 객체 형식으로 불러와야 함

/*
const {add,sub} = require("./export02.js"); 
console.log("Add :",add(10,5));
console.log("Sub :",sub(10,5));

or

const rtn = require("./export02.js"); 
console.log("Add :",rtn.add(10,5));
console.log("Add :",rtn.sub(10,5));
*/

const rtn = require("./export02.js"); 
console.log("Add :",rtn.add(10,5));
console.log("Add :",rtn.sub(10,5));