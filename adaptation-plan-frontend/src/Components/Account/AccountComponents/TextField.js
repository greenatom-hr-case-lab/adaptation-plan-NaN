import React, {useState} from 'react';
import '../AccountStyles/TextField.css'

function TextField(props) {
  
  return (
    <div className="item">
      <span>{props.title.name}</span>
      <input
        value={props.value}
        className="textField"
        type="text"
      disabled={props.disabled}/>
    </div>
  );
}

export default TextField