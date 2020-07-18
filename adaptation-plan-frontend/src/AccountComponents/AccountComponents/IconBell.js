import React from 'react';
import '../AccountStyles/IconBell.css';
import {Link} from "react-router-dom";

function IconBell() {
  return (
    <Link to={`/notifications`} className="iconBell">
      <div className="iconNotification"/>
    </Link>
  );
}

export default IconBell;
