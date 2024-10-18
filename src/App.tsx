import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./Views/Header";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Header />
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
