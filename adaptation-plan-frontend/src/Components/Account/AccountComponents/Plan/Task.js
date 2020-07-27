import React, {useState} from 'react';
import './Task.css'
import CalendarField from "../CalendarField";

function Task() {
  const [field, setField] = useState([
    {id: 1, name: 'Начало задачи', disabled: true},
    {id: 2, name: 'Конец задачи', disabled: true}
  ])
  
  return (
    <div className='task'>
      <div className="taskTitle">
        <input type='checkbox' className="checkBox"/>
        <input type='text' className="taskSubTitle" placeholder='Введите название задачи..' maxLength='80'/>
        <button className="deleteTask"/>
      </div>
      <div className="taskPeriod">
        <CalendarField title={field[0]}/>
      </div>
      <div className="taskPeriod">
        <CalendarField title={field[1]}/>
      </div>
      <textarea className="taskText"/>
      <p className="taskDate">Дата создания:</p>
    </div>
  );
}

export default Task;
