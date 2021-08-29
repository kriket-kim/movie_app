import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import {HashRouter, Route, BrowserRouter} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App() {
  return <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/movie/:id" component={Detail}/>
  </HashRouter>
}

export default App;