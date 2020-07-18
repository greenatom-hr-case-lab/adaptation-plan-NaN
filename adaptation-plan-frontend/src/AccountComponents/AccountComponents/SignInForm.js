import React from 'react';


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
  
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/signin', true)
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

// Отсылаем объект в формате JSON и с Content-Type application/json
    xhr.send(json);
    window.location.replace("/plan");n
    
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