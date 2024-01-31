// 20231230 NodeJS

/* ** 선생님 폴더 : window+r > \\302-t ** */

/*
    Object.method( param, ... )
    Object.property = "value"
    리눅스에서 파생된 아파치에서(서버기능) 파생한 서버 - 톰캣
    자바 등의 경우 아파치/톰캣 서버에서 테스트 가능
    js는 테스트 할 수 있는 브라우저가 아닌 동작 시킬 수 있는 서버가 없어서 node 탄생

    ES = ECMA Script = 유럽 / 컴퓨터 만드는 회사 모임 / 어쩌고 저쩌고
    commonjs 방식 / ES모듈 방식

    자료형 = 값의 종류 (number(숫자), stirng(문자), function(함수), array(배열), object(객체))
    typescript : 자료 = type / 엄격한
    
    MPA : multi page
    SPA : single page

    기존 서버는 순차적 처리
    노드 서버는 한번에 처리
    하지만 노드는 스레드가 하나라서 용량이 클 경우 느릴 수 있음

*/

/*
    노드 실행 : node
    노드 종료 : .exit / ctrl + c 두번 / ctrl + d
    디렉토리 검색 : dir
    디렉토리 이동(하위) : cd 디렉토리명
    디렉토리 이동(상위) : cd ../
    디렉토리 이동(최상위) : cd \
*/

/*
    ** Node 주요 명령어 ** 
    1. .break : 여러 줄 표현식 입력하는 중 .break명령 또는 키 조합을 누르면 중단
    2. .clear : 표현식 삭제. 빈 화면으로 만들어 줌 = cmd의 cls와 동일
    3. .exit : REPL 세션 종료
    4. .help : 명령어 목록 표시
    5. .save [파일명] : 현재 REPL 세션을 파일에 저장
        ex) .save ./file/to/save.js
    6. .load [파일명] : 현재 REPL 세션에 파일 로드
        ex) .load ./file/to/load.js
    7. .editor : 편집 모드 - REPL의 다중 입력은 제한적이므로 js파일을 만들어 불러오거나 에디터모드 사용, ctrl + c / ctrl + d로 종료

    ** 주요 내장 객체
    1. global : 브라우저의 window와 같은 전역 객체 (require, console 등)
    2. console : 주로 디버깅에 사용, 주요 메소드(log, time(label), error(error), table, dir, trace 등)
    3. 타이머 : setTimeout, setInterval, setImmediate / clearTimeout, clearInterval, clearimmediate
    4. process : 현재 실행되고 있는 노드 프로세스 정보 (.version, .arch, .platform, pid, .env, exit 등)
    
    ** js파일 불러오기 - 해당 파일과 같은 경로에서 실행
    1. 콘솔 (노드 실행x) : node 파일명.js - load 후 자동 종료
    2. REPL 세션(노드 실행o) : require("./파일명.js") - load 후 수동 종료, 현재 노드의 위치가 최상위이기 때문에 ./로 쓴다.
        - 파일 불러온 후 종료하지 않으면 모듈이 계속 유지 됨
    
    ** filename, dirname ** //
        1. __filename : 파일명 출력
        2. __dirname : 파일 경로 정보 제공
        3. ES모듈에서는 __filename __dirname 동작X - import.meta.url로 경로 추출

    * 밑줄 변수 할당
        1. 가장 최근 평가된 표현식의 결과를 특수 변수에 할당(__밑줄)
        2. 명시적으로 _값을 설정하면 동작 비활성화
*/

/* 
    ** 모듈 **
        1. 특정한 기능을 하는 함수나 변수의 집합
        2. 모듈 자체로 하나의 프로그램으로 사용 가능
        3. 다른 프로그램에 활용 가능
        - 장점 : 파일별로 코드를 모듈화하여 재사용 향상

    * 자주 사용하는 내장 모듈
        1. 노드 내에는 많은 모듈이 내장
        2. 모듈 or node : 모듈 형식으로 호출
        3. os, path, url 등
            ex) nav - useragent > os.platform()

    ** 노드 모듈 방식
        1. commonJS 모듈
            - nodejs에서 사용하는 보편적 모듈
            - 하나의 파일에서 기능을 실행하는 모듈을 내보내고 다른 파일에서 해당 기능을 불러와 사용
            - 동기적으로 파일 로드
            - 내보내기(module.exports)는 최하단에 위치하지 않아도 무관
            - 하나의 객체만 내보낼 경우 module.exports변수에 할당
            - 여러개의 객체를 내보낼 경우 exports 변수의 속성으로 할당

        2. ES(ECMAscript) 모듈
            - js 공식 모듈 형식
            - 브라우저와 노드 모두 같은 형식 사용
            - 비동기적 파일 로드
            - 파일 단위로 모듈 구성

    commonJS : exports - require
        ES   :  export  - import

    js의 기본 구문
        - module.exports = object.property = value : 하나
        - exports.??? = object.method(params) : 여러개

    * 모듈 생성
        1.  내보내기
            * exports 객체 사용
                - module.exports.모듈 외부에서 사용할 이름 - 모듈 내부에서의 이름;
                - ES모듈 사용시 둘 중 하나를 반드시 사용
                    - 파일 확장자를 .mjs로 변경 
                    - pakage.json파일 생성 후 속성과 값에 "type" : "module"을 추가하면 .js 확장자 사용 가능
                - 변수 또는 함수명 앞에 export키워드 추가
                    - commonJS : const a = 1; exports.a = a;
                    - ES : export const a = 1;

        2. 불러오기
            * commonJS : require() 함수로 호출 : 
                - const 모듈을 불러와 사용할 이름 - require("모듈파일 주소")
                - require은 최상단에 작성하지 않아도 무관
                - const 변수명 = require('./파일경로')
                - 파일명의 확장자(.js) 생략 가능
                    but 확장자 생략하면 아래 두가지 경우로 해석 됨
                        - 파일명.js
                        - 파일명/index.js
            * ES : import문 사용
                - 객체 저장 변수에 {}사용
                - 파일명의 확장자 반드시 작성
                    - import {변수명,변수명,...} from ("./파일명.확장자");
                    - const {변수명,변수명,...} = await import("./파일명.확장자"); // Node v18 이상

    
        * exports 객체 사용 시 유의 사항
        - exports객체는 module.exports를 참조하므로 참조관계 유지 주의
        - exports객체에는 객체 형식의 데이터처럼 속성명과 속성값 입력 필요
        - exports와 module.exports 중 하나만 사용하는 것이 유리

        * package.json
            - js의 객체(object) 형식의 파일
            - 상호변환
                - json을 js에 파싱 : JSON.parse()
                - js를 json에 텍스트 형식 문자열로 저장 : stringify()
            - 형식
                {
                    "name": "react_acadamy",    - 앱의 이름 : 소문자형식
                    "version": "1.0.0",         - 버전 : 세자리
                    "type": "module",           - 타입 : mjs 확장자를 js로 사용할 수 있음
                }

    * Node.js 모듈
        1. 코어모듈(Core module)
            - node.js에서 기본적으로 제공하는 모듈
            - 패스를 명시하지 않아도 무방
            - http, fs 등
            >>  var http = require('http');    - http 서버 및 관리 모듈
                var fs = require('fs')         - 파일 시스템 작업 관련 모듈
                var url = require('url')       - URL 파싱 관련 모듈

        2. npm을 통해 설치한 외부 패키지
            - 패스를 명시하지 않아도 무방
            >>  const cookie = require('cookie');

        3. 파일 모듈 (file modules, local module)
            - 코어 모듈을 제외한 모듈
            - 직접 생성한 모듈 포함
            - 반드시 패스 명시
            >>  const foo = require('./lib/foo');

        * http 모듈을 가지고 createServer메소드를 사용하여 서버 생성
            1. http 모듈 : 웹 서버 및 관련된 모듈 제공 (서버 객체를 가져온다)
                >>  const http = require('http')
            2. createServer 메소드 : 웹 서버 생성
                >>  const server = http.createServer();
            3. server.listen()

            * 주요 객체
                @ server 객체 : 웹 서버를 생성할 때 사용
                    - server 객체 메서드
                        1. listen(port, callback) : 첫번째 매개변수(포트)로 서버 실행
                            - 포트를 지정하지 않으면 node는 3000포트가 기본 지정
                            >>  server.listen(3000, function(){ console.log('3000번 포트로 서버가 실행되었습니다.) })
                        2. close(callback) : 서버 종료
                    - server 객체 주요 이벤트
                        1. request : 클라이언트의 요청 발생 시
                        2. connection : 클라이언트가 접속 했을 때
                        3. close : 서버 종료 시
                        4. checkContinue : 클라이언트가 지속적인 연결을 하고 있을 때
                        5. upgrade : 클라이언트가 http 업그레이드를 요청할 때
                        6. 
                @ response 객체 : 응답 메세지를 작성할 때 request이벤트 리스너의 두번째 매개변수로 전달
                    - respons 객체 매서드
                        1. writeHead(statusCode, statusMessage, headers) : 응답 헤더 작성
                        2. end(data, encoding, callback) : 응답 본문 작성
                            >>  const http = requier("http");
                                const server = http.createServer(function(req,res){
                                    res.writeHead(200, { 'Content-Type': 'text/html'})
                                    res.end('<h1>Hello World! </h1>')
                                })
                @ request 객체 : 응답 메세지를 작성할 때 request이벤트 리스너의 첫번째 매개변수로 전달

                fs로 파일 읽기
                라우터 - 서브페이지 읽을 수 있도록

            ex) const http = requier("http");
                const server = http.creatServer(function(req,res){})
                    - 인자가 두개 
                    - 첫번째 인자 : 요청받은 데이터 처리 
                    - 두번째 인자 : 응답할 내용 처리 
                    - res.~~~해조



*/

const x = 1;
console.log(x);
