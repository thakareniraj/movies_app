import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from "./searchMovies";


function App() {
  return (
  <>
  <div>
  <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovies/>
      </div>
  </div>
  </>
  );
}

export default App;
