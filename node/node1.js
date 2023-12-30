// 20231230 노드

// 노드 실행 : node
// 노드 종료 : .exit / ctrl + c 두번 / ctrl + d
// 디렉토리 검색 : dir
// 디렉토리 이동(하위) : cd 디렉토리명
// 디렉토리 이동(상위) : cd ../
// 디렉토리 이동(최상위) : cd \

// ** Node 주요 명령어 ** //
// 1. .break : 여러 줄 표현식 입력하는 중 .break명령 또는 키 조합을 누르면 중단
// 2. .clear : 표현식 삭제. 빈 화면으로 만들어 줌 = cmd의 cls와 동일
// 3. .exit : REPL 세션 종료
// 4. .help : 명령어 목록 표시
// 5. .save [파일명] : 현재 REPL 세션을 파일에 저장
//          ex) .save ./file/to/save.js
// 6. .load [파일명] : 현재 REPL 세션에 파일 로드
//          ex) .load ./file/to/load.js
// 7. .editor : 편집 모드 - REPL의 다중 입력은 제한적이므로 js파일을 만들어 불러오거나 에디터모드 사용, ctrl + c / ctrl + d로 종료

// ** filename, dirname ** //
// 1. __filename : 파일명 출력
// 2. __dirname : 파일 경로 정보 제공
// 3. ES모듈에서는 __filename __dirname 동작X - import.meta.url로 경로 추출

// js파일 불러오기 - 해당 파일과 같은 경로에서 실행
// 1. 콘솔 (노드 실행x) : node 파일명.js - load 후 자동 종료
// 2. REPL 세션(노드 실행o) : require("./파일명.js") - load 후 수동 종료, 현재 노드의 위치가 최상위이기 때문에 ./로 쓴다.

// - 파일 불러온 후 종료하지 않으면 모듈이 계속 유지 됨

// Object.method( param, ... )
// Object.property = "value"
// 아파치에서 파생한 서버 - 톰캣
// 자바 등의 경우 아파치/톰캣 서버에서 테스트 가능
// js는 테스트 할 수 있는 브라우저가 아닌 동작 시킬 수 있는 서버가 없어서 node 탄생

// ES = ECMA Script = 유럽 / 컴퓨터 만드는 회사 모임 / 어쩌고 저쩌고
// commonjs 방식 / ES모듈 방식

// 자료형 = 값의 종류 (number(숫자), stirng(문자), function(함수), array(배열), object(객체))
// typescript : 자료 = type / 엄격한

const x = 1;
console.log(x);
