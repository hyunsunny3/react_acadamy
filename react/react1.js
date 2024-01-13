// React.js

/*
    besttofjs - 언어랭킹 사이트
    프레임 웤 - 개발환경
    라이브러리 - 개발도구 

    페이스북에서 만든 js UI라이브러리
    컴포넌트(사용자 정의 태그)를 사용하여 가독성 및 재사용성 향상

    // 온라인 개발환경 : 편리한 개발환경 but 외부인터넷 안될경우 사용불가
    공식사이트 > get started > online playgrounds
    code sandbox / stackblitz / codepen

    tool chain
    - 리액트 프로젝트 개발 시 목표에 따라 필요한 여러가지 개발 환경 및 도구를 모아 한번에 제공하는 도구
    - 공식사이트 > get started > installation > start a new react project
    ex) create-react-app(CRA) : 가장 기본적인 리액트 개발 환경
        vite(빗) : 모던 웹 프로젝트 개발 시 유용
        next.js : 풀스텍 개발 환경 (난이도 제일 높음)
        remix : 풀스텍 개발 환경 (중첩라우팅 기본 제공)
        gatsby : CMS 환경 제공
        expo : 네이티브 앱 개발 환경

    npm을 이용한 CRA 설치
    - node.js로 만들어진 프로그램을 쉽게 설치
    - js 프로그래밍 언어를 위한 패키지 관리자
    - js 런타임 환경 node.js의 기본 패키지 관리자
    - 명령 줄 클라이언트(CLI), 공개 패키지, 지불 방식의 개인 패키지의 온라인 데이터베이스(npm레지스트리)로 구성
    - yarn을 대체하여 사용하기도 함

    react 설치 : '-g'(글로벌) 모든 폴더에서 해당 기능을 사용할 수 있도록 설치함
    - 윈도우 : npm install -g creat-react-app 
    - 맥 : sudo npm install -g create-react-app
    - 설치 확인 : create-react-app -V(대문자)

    * npm & npx
    npm : 프로그램 설치
    npx : 해당 프로그램을 한번만 설치 후 자동 삭제
            - 컴퓨터 공간 낭비 방지
            - 설치시마다 새로 다운로드 받기 때문에 항상 최신 상태 유지

    * 개발 환경 준비하기
    - 개발에 사용할 디렉토리 생성
        - 디렉토리명으로 react사용 불가
    - 터미널 또는 cmd에서 디렉토리 이동
        - cd명령어 + 경로
        - cd명령어 + 디렉토리를 콘솔로 드레그 앤 드롭
    - 프로젝트 생성 명령 입력
        - 프로젝트명의 폴더에 생성 : create-react-app [프로젝트 명]
        - 현재 디렉토리에 설치 : create-react-app .

    * 디렉토리 구조 이해하기
        - 프로젝트 생성 시 자동으로 폴더 및 파일 생성
        - publick : 프로젝트 실행 시 보여질 화면과 파일 생성
        - src : 프로젝트 개발 시 코드 작성 할 파일 생성

        - src > App.js : 코드개발
        - src > index.js : 개발된 코드를 전달 받아서 index.html에 랜더링 시킴
        - public > index.html : index.js에서 랜더링 시킨 내용을 브라우저에 보여줌

    * 빌드
        - npm run build
        - 필요한 파일만 최소화해서 빌드
    
    * 리액트 테스트 서버 만들기
        - https 에서만 구동 가능
        - npm install -g serve
        - serve (-s) build : '-s' 루트 디렉토리로 설정

    * 컴포넌트 만들기 : 파스칼기법(ReactComponent) 
        - 함수 방식과 클래스 방식 섞어서 사용 가능 단, 데이터 불러오는 방식은 다름
        1. 함수 방식 컴포넌트
            function Name(){ return(); }
            const Name = () => { return(); }

        2. 클래스 방식 컴포넌트
            import React, {Component} from 'react'; or import {React, Component} from 'react';
            class Name extends Component { render(){ return(); } }

            여기서 render는 사용자 정의 함수였다

    * props와 state
        컴포넌트가 바뀐다고해서 브라우저가 인식하지는 못함. 인식하도록 하는 것이 이벤트 이벤트 내용은 함수라고 한다.
        함수를 만들어야 로드하고 로드됐을 때 이벤트가 동작.
        - 모듈 : 기능만 있어서 가져다 쓰는
        - 컴포넌트(사용자 정의 태그) : 태그처럼 가져다 쓰는 
            element : 일반 적인 html 태그. 내부 property - 속성(attribute)
            component : 사용자 정의 태그. 내부 property -  props

        props
        - 같은 컴포넌트여도 다른 내용을 실행 시킬 수 있음

*/