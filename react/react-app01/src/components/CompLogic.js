import React from 'react';
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from 'react-redux';
//Provider(store의 적용 범위) 안에 있는 useSelector로 선택해서 useDispatch(값을 바꿔줘)로 어쩌고 , connect도 있음(재사용)

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      number: 1,
    };
  }

  // const name = [...복제할 배열이름]
  const newState = { ...currentState };

  if( action.type === 'add' ){
    newState.number ++
  }

  return newState;
}

const store = createStore(reducer);

function TopComp1() {
  return (
    <div>
      <h2>Top 1</h2>
      <TopComp2 ></TopComp2>
    </div>
  );
}

function TopComp2() {
  return (
    <div>
      <h2>Top 2</h2>
      <TopComp3></TopComp3>
    </div>
  );
}

function TopComp3() {

  //sset
  function f(aaa){
    return aaa.number;
  }
  const numner = useSelector(f);
  //eset

  return (
    <div>
      <h2>Top 3 : {numner}</h2>
    </div>
  );
}

function BottomComp1() {
  return (
    <div>
      <h2>Bottom 1</h2>
      <BottomComp2></BottomComp2>
    </div>
  );
}

function BottomComp2() {
  return (
    <div>
      <h2>Bottom 2</h2>
      <BottomComp3></BottomComp3>
    </div>
  );
}

function BottomComp3() {

  const dispatch = useDispatch();
  return (
    <div>
      <h2>Bottom 3</h2>
      <button 
        type='button' 
        onClick={() => { dispatch({
          type: 'add'
        }) }}
      >
        +
      </button>
    </div>
  );
}

function CompLogic() {
  return (
    <div className='App'>
      <h2>ROOT</h2>
      <hr></hr>

      <Provider store={store}>
        <div className='top-child'>
          <TopComp1></TopComp1>
        </div>

        <hr></hr>

        <div className='bottom-child'>
          <BottomComp1></BottomComp1>
        </div>
      </Provider>
    </div>
  );
}

export default CompLogic;
