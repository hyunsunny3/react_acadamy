//fetch API 
// then() : fetch의 하위 요소가 아님, 바로 위의 리턴값을 인자로 내려받음 / 가져와(fetch) > 변환(then) > 사용(then)
// fetch("https://jsonplaceholder.typicode.com/posts") //가져와
//       .then( fetch로 전달받은 데이터 => 데이터 파싱(형 변환) ) //변환
//       .then( 바로 위 then의 리턴 값 => state에 저장 ) //사용
//       .catch( (error) => {} ) //에러 시

import React, { useEffect, useState } from "react";

function App() {
  const [btnVal, setBtnVal] = useState(); //제목
  const [items, setItems] = useState([]); //데이터 내용

  useEffect( () => { //useEffect의 callback함수에는 async 비동기 함수 못씀

    // console.log("useEffect 실행");
    // const data = fetch("https://jsonplaceholder.typicode.com/posts")
    // console.log(data);

    // async function fetchFunc(){ //useEffect에서 async 비동기 함수를 사용하려면 내부에 함수를 만들어서 비동기 처리 후 함수 리턴
    //   await fetch("https://jsonplaceholder.typicode.com/users")
    // }
    // fetchFunc()

    // fetch("https://jsonplaceholder.typicode.com/" + btnVal)
    fetch(`https://jsonplaceholder.typicode.com/${btnVal}`)
      .then( res => res.json() ) //파싱 (object는 js가 읽지 못하기 때문에 json으로 변환)
      .then( res => setItems(res) )

  }, [btnVal] );

  return (
    <div className="App">
      <h1>C</h1>
        <button onClick={ () => {setBtnVal("posts")} }>Posts</button>
        <button onClick={ () => {setBtnVal("users")} }>Users</button>
        <button onClick={ () => {setBtnVal("comments")} }>Comments</button>

        <hr />

        <p>{btnVal}</p>
        {/* <pre>{JSON.stringify(items,null,2)}</pre> */}
        {/* ** 데이터 나누기 **
          1. for
          2. while
          3. .map : 전체 데이터를 가공 후 전체 반환
          4. .filter : 전체 데이터에서 조건에 맞는 데이터만 반환
        */}
        {/* 
          items.map( (item) => {
            return (<pre>{JSON.stringify(items)}</pre>)
            // return //일반 변수
            // return { , , } //객체
            // return [ , , ] //배열
            // return () //태그
          })
        */}
        {
          items.map( 
            item => <pre key={item.id}>{JSON.stringify(items)}</pre>
            )
        }
    </div>
  );
}

export default App;
