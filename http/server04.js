// 웹 서버 생성을 위한 내장 모듈 가져오기
const http = require("http");

// 웹 서버 생성
const server = http.createServer(function(req, res){
    res.writeHead(302,{ // 강제로 페이지 리디렉션
        "Location":"http://www.naver.com"
    });
    res.end();
});

// 뒤로가기 : history.back()
//  : history.go()
//  : history.forword()

// 웹 서버 실행
server.listen(3001, () => {
    console.log("server is running...");
});