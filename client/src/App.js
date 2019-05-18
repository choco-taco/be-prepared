import React, {Component} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import { SignUp, Home, Landing, LogIn } from "./Pages";

class App extends Component  {
  state = {
    user:null
  };

  render = () => (
    <BrowserRouter>
  
  <Route exact path={`${process.env.PUBLIC_URL}/`} component={Landing} />

  <Route exact path={`${process.env.PUBLIC_URL}/home`} component={Home} />


  <Route exact path={`${process.env.PUBLIC_URL}/signup`} component={SignUp} />
 
  <Route exact path={`${process.env.PUBLIC_URL}/login`} component={LogIn} />


    </BrowserRouter>
  );
}

export default App;
