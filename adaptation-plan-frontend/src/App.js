import React from 'react';
import './App.css';
import Account from "./AccountComponents/AccountComponents/Account";
import SignInForm from "./AccountComponents/AccountComponents/SignInForm";
import Plan from "./AccountComponents/AccountComponents/Plan";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={SignInForm}/>
        <Route path='/' component={Account}/>
      </Switch>
    </div>
  );
}

export default App;
