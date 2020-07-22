import React from 'react';
import axios from 'axios'

function SignInForm() {
  
  function sendData(e) {
    e.preventDefault()
    console.log('Mounted')
    var object = {};
    var formData = new FormData(document.forms.person);
  
    formData.forEach(function (value, key) {
      console.log(value, key)
      object[key] = value;
    });
    var json = JSON.stringify(object);
    console.log(json)
    axios.post("/signin", json)
      .then(response => (response.data))
      .catch(error => (error));
    /*var xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://localhost:3001/signin', true)
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) {
        return
      }
    
      if (xhr.status === 200) {
        console.log('result', xhr.responseText)
      } else {
        console.log('err', xhr.responseText)
      }
    }*/

// Отсылаем объект в формате JSON и с Content-Type application/json
  
    
  }
  return (
    <form name="person">
      <input name="login" />
      <input name="password" />
      <button onClick={sendData}>Отправить</button>
    </form>
  );
}

export default SignInForm;