import React, {useState} from 'react';
import {connect} from "react-redux";
import "./PrivateInfo.css"
import CalendarField from "../CalendarField";
import TextField from "../TextField";

function PrivateInfo(props) {
  const [field, setField] = useState([
    {id: 1, name: 'Дата рождения', disabled: false},
    {id: 2, name: 'Почта', disabled: false},
  ])
  
  return (
    <div className="privateInfo">
      <CalendarField title={field[0]}/>
      <TextField title={field[0]} placeholder={'example@greenatom.ru'} disabled={field[0].name}/>
    </div>
  );
}

const mapStateToProps = state => {
  console.log("mapStateToProps")
  console.log(state.profileReducer.loading)
  return {
    loading: state.profileReducer.loading,
    profile: state.profileReducer.profile,
    error: state.profileReducer.error
  }
}


export default connect(mapStateToProps, null)(PrivateInfo);
