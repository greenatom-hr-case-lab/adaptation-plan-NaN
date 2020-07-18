import React from 'react';
import { Route, Switch } from "react-router-dom";
import AccountHeader from "./AccountHeader";
import Plan from "./Plan";
import Cabinet from "./Cabinet";
import News from "./News";
import Notif from "./Notif";
import Profile from "./Profile";

function Account() {
  return (
    <div>
      <AccountHeader/>
      <Switch>
        <Route exact path='/plan' component={Plan}/>
        <Route exact path='/cabinet' component={Cabinet}/>
        <Route exact path='/news' component={News}/>
        <Route exact path='/notifications' component={Notif}/>
        <Route exact path='/profile' component={Profile}/>
      </Switch>
    </div>
  );
}

export default Account;
