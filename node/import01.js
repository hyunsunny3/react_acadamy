//불러오는 파일이 객체형식으로 내보내졌으므로 객체 형식으로 불러와야 함

/*
const {isOdd} = require("./export01.js"); 
console.log( isOdd(5) );

or

const rtn = require("./export01.js");
console.log( rtn.isOdd(8) );
*/

const rtn = require("./export01.js");
console.log( rtn.isOdd(8) );