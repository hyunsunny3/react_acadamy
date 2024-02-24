import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';

function reducer(state, action){
  

  return state
}
const initialState = { value: 10, aa: 1, bb: 2 }
const store = createStore( reducer, initialState )

function Counter(){
  const count = useSelector( state => state.value )
  return(
    <div>
      <p>count : { count }</p>
      <button>ADD</button>
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