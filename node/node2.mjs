// file.path.js

/* ES모듈 방식 - 확장자 mjs */
import {fileURLToPath} from 'url'; // import : 변수의 다른 표현식
console.log(`File Name : ${fileURLToPath(import.meta.url)} \n File Path : ${import.meta.url}`);

// console.log(`File Name : ${__filename} \n File Path : ${__dirname}`);

/* 
* 실행 코드
1. 콘솔 (노드 실행x) : PS C:\Users\Administrator.User -2023NOYHM\Desktop\hs\react_acadamy\node> node node2.mjs
2. REPL 세션(노드 실행o) : > require("./node2.mjs")
*/

/* 
* 결과값 *
console.log(import.meta.url);
ㄴ file:///C:/Users/Administrator.User%20-2023NOYHM/Desktop/hs/react_acadamy/node/node2.mjs

import {fileURLToPath} from 'url'; // import : 변수의 다른 표현식
console.log(`File Name : ${fileURLToPath(import.meta.url)} \n File Path : ${import.meta.url}`);
ㄴ  File Name : C:\Users\Administrator.User -2023NOYHM\Desktop\hs\react_acadamy\node\node2.mjs 
    File Path : file:///C:/Users/Administrator.User%20-2023NOYHM/Desktop/hs/react_acadamy/node/node2.mjs
*/

