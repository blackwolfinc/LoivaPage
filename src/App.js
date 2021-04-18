import './App.css';
import React from 'react';

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Page1 } from './pages/Page1';
import "./assets/Animation.scss"





function App() {
  return (
    //route aplikasi 
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/">
    <Page1/>
      </Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
