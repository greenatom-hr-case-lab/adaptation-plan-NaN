import React, {useState} from 'react';
import Calendar from "react-calendar";
import '../AccountStyles/CalendarField.css'
import Datepicker from "react-datepicker"
function CalendarField(props) {
  
  const [date, setDate] = useState(props.date)
  
  const change = date => {
    hideCalendar()
    setDate(date.toLocaleDateString())
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
        <input value={date} type="text" className="date" onFocus={showCalendar}  onBlur={hideCalendar}/>
        {
          calendarShow
        &&
        <div className='calendar'>
          <Calendar
            onChange={change}
            maxDate={props.maxDate}
          />
        </div>
        }
      </div>
  );
}

export default CalendarField;