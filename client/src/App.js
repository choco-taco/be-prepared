import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import { SignUp, Home, Landing, LogIn, CreatePlan, SinglePlan, SharePlan, MedicalPlan, FirePlan, EarthquakePlan, TornadoPlan, CreateMedical, CreateFire, CreateEarthquake, CreateTornado} from "./Pages";

class App extends Component {
  state = {
    user: null
  };

  render = () => (
    <BrowserRouter>

      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Landing} />

      <Route exact path={`${process.env.PUBLIC_URL}/home`} component={Home} />

      <Route exact path={`${process.env.PUBLIC_URL}/signup`} component={SignUp} />

      <Route exact path={`${process.env.PUBLIC_URL}/login`} component={LogIn} />

      <Route exact path={`${process.env.PUBLIC_URL}/createplan`} component={CreatePlan} />

      <Route exact path={`${process.env.PUBLIC_URL}/singleplan`} component={SinglePlan} />

      <Route exact path={`${process.env.PUBLIC_URL}/shareplan`} component={SharePlan} />

      <Route exact path={`${process.env.PUBLIC_URL}/medicalplan`} component={MedicalPlan} />

      <Route exact path={`${process.env.PUBLIC_URL}/fireplan`} component={FirePlan} />

      <Route exact path={`${process.env.PUBLIC_URL}/earthquakeplan`} component={EarthquakePlan} />

      <Route exact path={`${process.env.PUBLIC_URL}/tornadoplan`} component={TornadoPlan} />

      <Route exact path={`${process.env.PUBLIC_URL}/createmedical`} component={CreateMedical} />

      <Route exact path={`${process.env.PUBLIC_URL}/createfire`} component={CreateFire} />

      <Route exact path={`${process.env.PUBLIC_URL}/createearthquake`} component={CreateEarthquake} />

      <Route exact path={`${process.env.PUBLIC_URL}/createtornado`} component={CreateTornado} />

    </BrowserRouter>
  );
}

export default App;
