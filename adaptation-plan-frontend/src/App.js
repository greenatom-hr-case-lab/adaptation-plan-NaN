import React from 'react';
import './App.css';
import Account from "./Components/Account/AccountComponents/Account";
import SignInForm from "./Components/Auth/SignInForm";
import Plan from "./Components/Account/AccountComponents/Plan/Plan";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
      <Switch>
        <Route exact path='/' component={SignInForm}/>
        <Route path='/' component={Account}/>
      </Switch>
  );
}

export default App;
