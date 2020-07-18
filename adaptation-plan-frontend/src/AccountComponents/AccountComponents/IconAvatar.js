import React from 'react';
import '../AccountStyles/IconAvatar.css';
import {Link} from "react-router-dom";

function IconAvatar() {
  return (
    <Link to={`/profile`} className="iconAvatar"/>
  );
}

export default IconAvatar;
