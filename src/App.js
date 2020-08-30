import React from 'react';
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Sidebar from "./components/Sidebar";
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Sidebar />
      <Route path="/portfolio" component={Portfolio} />
      <div className="introWrapper">
        <h1 className="intro">Hello<span className="purpleCharacters">,</span> I'm Katie<span className="purpleCharacters">.</span> I'm a full stack web developer<span className="purpleCharacters">.</span></h1>
      </div>
      <div className="aboutMe">
        <h1>I am a Code Nation student.</h1>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
