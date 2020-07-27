import React, {useState} from 'react';
import '../AccountStyles/TextField.css'

function TextField(props) {
  const [value, setValue] = useState(props.value)
  
  function valueChange(event) {
    setValue(event.target.value)
  }
  
  return (
    <div className="item">
      <span>{props.title.name}</span>
      <input
        value={value}
        className="textField"
        onChange={valueChange}
        type="text"
        placeholder={props.placeholder}/>
    </div>
  );
}

export default TextField