import { createSlice } from '@reduxjs/toolkit';
import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 1, aa: 2, bb: 3 },
  reducers: {
    ADD: (state, action) => {
      state.value = state.value + action.step
    },
    SUB: () => {},
    RESET: () => {},
    CHECKED: () => {},
  }
})


function reducer(state, action){
  const newState = { ...state } 
  console.log(action)
  if( action.type === 'ADD' ){
    return { value: newState.value + action.step }
  } 

  return newState
}
const initialState = { value: 1, aa: 2, bb: 3 }
const store = createStore( reducer, initialState )

function Counter(){
  const dispatch = useDispatch()
  const count = useSelector( state => state.value )
  return(
    <div>
      <p>count: { count }</p>
      <button
        onClick={ () => { dispatch( { type: 'ADD', step: 2 } ) } }
      >ADD</button>
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;