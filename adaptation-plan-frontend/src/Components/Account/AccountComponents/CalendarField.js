import React, {useState} from 'react';
import Calendar from "react-calendar";
import '../AccountStyles/CalendarField.css'
import Datepicker from "react-datepicker"
function CalendarField(props) {
  
  const change = date => {
    hideCalendar()
    props.update(date)
  }
  
  const [calendarShow, setCalendarShow] = useState(false)
  
  function showCalendar() {
    setCalendarShow(true)
  }
  
  function hideCalendar() {
    setTimeout(() => setCalendarShow(false), 100)
  }
  
  return (
      <div className="item">
        <span>{props.title.name}</span>
        <input value={props.value} type="text" className="date" onFocus={showCalendar}  onBlur={hideCalendar} disabled={props.disabled}/>
        {
          calendarShow
        &&
        <div className='calendar'>
          <Calendar
            onChange={() => change}
            maxDate={props.maxDate}
          />
        </div>
        }
      </div>
  );
}

export default CalendarField;