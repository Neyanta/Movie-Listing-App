import React from "react";

import "./App.css";
import Search from "./components/Search";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;
