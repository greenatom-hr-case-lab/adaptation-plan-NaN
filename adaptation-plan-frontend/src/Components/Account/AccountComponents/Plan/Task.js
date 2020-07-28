import React, {useState} from 'react';
import './Task.css'
import CalendarField from "../CalendarField";
import {employeesFetchData} from "../../../../redux/actions/employeesPlan";
import {addTask, planFetchData, deleteTask} from "../../../../redux/actions/adaptationPlan";
import {connect} from "react-redux";

function Task(props) {
  const [field, setField] = useState([
    {id: 1, name: 'Начало задачи', disabled: true},
    {id: 2, name: 'Конец задачи', disabled: true}
  ])
  
  const deleteTask = () => {
    props.deleteTodo(props.index)
  }
  return (
    <div className='task'>
      <div className="taskTitle">
        <input type='checkbox' className="checkBox" checked={props.task.resultTask} disabled={}/>
        <input type='text' className="taskSubTitle" placeholder='Введите название задачи..' maxLength='80' value={props.task.title ? props.task.title : ''}/>
        <button className="deleteTask" onClick={deleteTask}/>
      </div>
      <div className="taskPeriod">
        <CalendarField title={field[0]} value={props.task.taskPeriodStart ? props.task.taskPeriodStart : ''}/>
      </div>
      <div className="taskPeriod">
        <CalendarField title={field[1]} value={props.task.taskPeriodEnd ? props.task.taskPeriodEnd : ''}/>
      </div>
      <textarea className="taskText" value={props.task.bodyTask ? props.task.bodyTask : ''}/>
      <p className="taskDate">Дата создания: {props.plan.position ? props.plan.position : ''}</p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    plan: state.adaptationPlanReducer.plan,
  }
}
const mapDispatchToProps = (dispatch, object) => {
  return {
    deleteTodo: (object) => dispatch(deleteTask(object))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task)
