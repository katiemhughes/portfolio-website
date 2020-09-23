import React from 'react';
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Stack from "./components/Stack";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar />
        <div className="mainContent">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/stack" component={Stack}/>
          <Route path="/portfolio" component={Portfolio}/>
        </Switch>
        </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
