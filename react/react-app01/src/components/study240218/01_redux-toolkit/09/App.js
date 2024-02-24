import { configureStore, createSlice } from '@reduxjs/toolkit';
import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: { value: 1, aa: 2, bb: 3 },
  reducers: {
    ADD: (state, action) => {
      // console.log(action);
      // state.value = state.value + action.step
      state.value = state.value + action.payload
    },
    SUB: () => {},
    RESET: () => {},
    CHECKED: () => {},
  }
})

const timerSlice = createSlice({
  name: 'timer',
  initialState: { hour: 1, min: 2, sec: 3 },
  reducers: {
    INC: () => {},
    DEC: () => {}
  }
})

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    timer: timerSlice.reducer,
  }
})

function Counter(){
  const dispatch = useDispatch()
  const count = useSelector( state => {
    // console.log(state);
    // console.log(state.counter);

    // return state.value
    return state.counter.value
  } )
  return(
    <div>
      <p>count: { count }</p>
      <button
        // type: 'slice이름/리듀서'
        // onClick={ () => { dispatch( { type: 'counterSlice/ADD', step: 2 } ) } }
        onClick={ () => { dispatch( counterSlice.actions.ADD(2) ) } }
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