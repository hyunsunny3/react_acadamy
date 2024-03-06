import React from "react";
import useFetch from "./useFetch";

function App() {
  const fetchUrl = 'https://jsonplaceholder.typicode.com';
  
  const {items, fetchData } = useFetch( fetchUrl, 'posts' )

  return (
    <div className="App">
      <h1>C</h1>
        <button onClick={ () => {fetchData('posts')} }>Posts</button>
        <button onClick={ () => {fetchData('users')} }>Users</button>
        <button onClick={ () => {fetchData('comments')} }>Comments</button>

        <hr />

        {/* <p>{resourceType} (total: {items.length})</p> */}
        <pre>{JSON.stringify(items, null, 2)}</pre>

    </div>
  );
}

export default App;
