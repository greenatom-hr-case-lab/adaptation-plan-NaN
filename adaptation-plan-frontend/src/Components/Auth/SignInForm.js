import React, { useState } from 'react';
import { connect } from 'react-redux'
import { authFetchData } from '../../redux/actions/auth'
import { Link, Redirect } from 'react-router-dom'
import Loader from '../Account/AccountComponents/Loader'

function SignInForm(props) {
  const [click, setClick] = useState(false)
  
  function sendData(e) {
    e.preventDefault()
    var object = {};
    var formData = new FormData(document.forms.person);
  
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    var json = JSON.stringify(object);
    /*console.log(json)
    const token = axios.post("/signin", object)
      .then(response => {
        return response.data
      })
      .catch(error => (error));
    console.log(token)*/
    props.fetchData(object)
    setClick(true)
  }
  return (
    <div>
      <form name="person">
        <input name="login" />
        <input name="password" />
      </form>
      <button onClick={sendData}>Отправить</button>
      {props.loading && <Loader/>}
      {props.token && <Redirect from="/" to="/plan"/>}
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state.authReducer)
  return {
    loading: state.authReducer.loading,
    token: state.authReducer.token,
    error: state.authReducer.error
  }
}

const mapDispatchToProps = (disptach, object) => {
  console.log(object)
  return {
    fetchData: (object) => disptach(authFetchData(object))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm) ;