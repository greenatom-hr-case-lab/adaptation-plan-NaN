import React from 'react';
import './ProfileField.css';

function ProfileField(props) {
  return (
    <div>
      {props.field}
      <input placeholder="Хотин" readOnly/>
    </div>
  );
}

export default ProfileField;