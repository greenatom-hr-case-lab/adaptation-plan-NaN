import React, {useState} from 'react';
import Calendar from "react-calendar";
import {connect} from "react-redux";
import "./PrivateInfo.css"

function PrivateInfo(props) {
  const d = new Date()
  const [date, setDate] = useState(d.toLocaleDateString())
  
  const change = date => {
    setDate(date.toLocaleDateString())
    hideCalendar()
  }
  
  const [calendarShow, setCalendarShow] = useState(false)
  const [mail, setMail] = useState(props.profile.email)
  
  function showCalendar() {
    setCalendarShow(true)
  }
  
  function hideCalendar() {
    setCalendarShow(false);
  }
  
  function mailChange(event) {
    setMail(event.target.value)
  }
  return (
    <div className="privateInfo">
      <div className="item">
        <div>Дата рождения</div>
        <input value={date} type="text" className={'birthday'} onClick={showCalendar}/>
        { calendarShow
          ?
          <div className='calendar' >
          <Calendar
            onChange={change}
            maxDate={new Date()}
          />
          </div>
          :
          ''}
      </div>
      <div className="item">
        <div>Почта</div>
        <input value={mail} onChange={mailChange} type="text" placeholder="example@greenatom.ru"/>
      </div>
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
