// 웹 서버 생성을 위한 내장 모듈 가져오기
const http = require('http');

// 웹 서버 생성
const server = http.createServer();

// 웹 서버 실행
server.listen(3001, () => {
    console.log("server is running...");
});