import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {Route, Switch, Redirect} from "react-router-dom";
import { profileFetchData } from "../../../../redux/actions/profile"
import './Profile.css';
import SignOut from "./SignOut";
import Loader from "../Loader"
import PrivateInfo from "./PrivateInfo";
import 'react-calendar/dist/Calendar.css';
import TitleItem from "../TitleItem";
import News from "../News/News";
import Notif from "../Notifications/Notif";


function Profile(props) {
  const [token, setToken] = useState(localStorage.getItem('token'))
  useEffect(() => {
    console.log("useEffect")
    props.fetchData()
  }, [])
  
  const [state, setState] = useState([
      {id: 1, name: 'Личная информация', path: 'profile/private', show: false},
      {id: 2, name: 'Работа', path: 'profile/job', show: false},
      {id: 3, name: 'Кошелек', path: 'profile/pay', show: false}
    ]
  )
  
  function updateState(id){
    setState(
      state.map(state => {
        state.id === id ? state.show = true : state.show = false;
        return state;
      })
    )
  }
  if (token) {
    if (props.loading)
      return <Loader/>
    else
      return (
        <div className="profile">
          <div className="avatarCard">
            <div className="avatar"/>
            <div className="caption">
              <div>
                <div className="">{props.profile.name}</div>
                <div>{props.profile.username}</div>
              </div>
              <SignOut/>
            </div>
          </div>
          <div className="container">
            <div className="titles">
              {state.map(function (state) {
                  return <TitleItem state={state} updateState={updateState} key={state.id} locale={true}/>
                }
              )}
            </div>
            <div className="content">
              <Switch>
                <Route exact path='/profile/private' component={PrivateInfo}/>
                <Route exact path='/profile/private' component={News}/>
                <Route exact path='/profile/private' component={Notif}/>
              </Switch>
            </div>
          </div>
        </div>
      )
  }
  else
    return <Redirect to="/" />
}

const mapStateToProps = state => {
  console.log("mapStateToProps")
  console.log('token', state.authReducer.token)
  console.log(state.profileReducer.loading)
  return {
    token: state.authReducer.token,
    loading: state.profileReducer.loading,
    profile: state.profileReducer.profile,
    error: state.profileReducer.error
  }
}

const mapDispatchToProps = dispatch => {
  console.log("mapDispatchToProps")
  return {
    fetchData: () => dispatch(profileFetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);