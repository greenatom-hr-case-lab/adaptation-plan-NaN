import React, {useEffect, useState} from 'react';
import {connect, useSelector} from "react-redux";
import { profileFetchData } from "../../../../redux/actions/profile"
import './Profile.css';
import ProfileField from "./ProfileField";
import SignOut from "./SignOut";
import Loader from "../Loader"
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


function Profile(props) {
  const d = new Date()
  const [date, setDate] = useState(d.toLocaleDateString())
  const change = date => {
    setDate(date.toLocaleDateString())
    hideCalendar()
  }
  
  useEffect(() => {
    console.log("useEffect")
    props.fetchData()
  }, [])
  
  const [calendarShow, setCalendarShow] = useState(false)
  
  function showCalendar() {
    setCalendarShow(true)
  }
  
  function hideCalendar() {
    setCalendarShow(false)
  }
  
  return (
    <div>
      {props.loading
        ?
        <Loader/>
        :
        <div>
          <div>
            {props.profile.name}
            <input type="text" name={props.profile.name} placeholder="Иванов"/>
          </div>
          <div>
            Имя
            <input type="text" placeholder="Имя"/>
            </div>
          <div>
            Отчество
            <input type="text" placeholder="Отчество"/>
          </div>
          <div>
            Дата рождения
            <input value={date} className={'birthday'} onClick={() => showCalendar()}/>
            { calendarShow
              ?
              <Calendar
                onChange={change}
                className='calendar'
              />
            :
            ''}
              
          </div>
          <div>
            Почта
            <input type="text" placeholder="example@greenatom.ru"/>
          </div>
          <div>
            Компания
            <input type="text" placeholder="Компания"/>
          </div>
          <div >
            <SignOut/>
          </div>
        </div>
      }
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

const mapDispatchToProps = dispatch => {
  console.log("mapDispatchToProps")
  return {
    fetchData: () => dispatch(profileFetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);