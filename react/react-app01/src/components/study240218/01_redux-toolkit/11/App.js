import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './Store';
// import counterSlice from './CounterSlice';
import { ADD, SUB } from './CounterSlice';

function Counter(){
  const dispatch = useDispatch()
  const count = useSelector( state => {
    return state.counter.value
  } )
  return(
    <div>
      <p>count: { count }</p>
      <button
        // onClick={ () => { dispatch( counterSlice.actions.ADD(2) ) } }
        onClick={ () => { dispatch( ADD(2) ) } }
      >ADD</button>
      <button
        // onClick={ () => { dispatch( counterSlice.actions.SUB(1) ) } }
        onClick={ () => { dispatch( SUB(1) ) } }
      >SUB</button>
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