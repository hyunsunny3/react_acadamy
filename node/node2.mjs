// file.path.js

/* ES모듈 방식 - 확장자 mjs */
console.log(import.meta.url);

// console.log(`File Name : ${__filename} \n File Path : ${__dirname}`);

/* 
* 실행 코드
1. 콘솔 (노드 실행x) : PS C:\Users\Administrator.User -2023NOYHM\Desktop\hs\react_acadamy\node> node node2.mjs
2. REPL 세션(노드 실행o) : > require("./node2.mjs")
*/

/* 
* 결과값 *
File Name : C:\Users\Administrator.User -2023NOYHM\Desktop\hs\react_acadamy\node\node2.mjs 
File Path : C:\Users\Administrator.User -2023NOYHM\Desktop\hs\react_acadamy\node
*/

