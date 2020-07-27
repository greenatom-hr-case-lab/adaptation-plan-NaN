import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import {Redirect} from "react-router-dom";
import './Plan.css';
import SelectList from "../SelectList";
import Stage from "./Stage";
import {employeesFetchData} from "../../../../redux/actions/employeesPlan";
import {planFetchData} from "../../../../redux/actions/adaptationPlan";

import BeginThePlan from "./BeginThePlan";
import MainInfo from "./MainInfo";
import Task from "./Task";

function Plan(props) {
  /*const [stage, setStage] = useState([
    {id: 1, name: 'Создание плана', completed: true , doing: false},
    {id: 2, name: 'Заполнение сотрудником', completed: true, doing: false},
    {id: 3, name: 'Согласование руководителем', completed: false, doing: true},
    {id: 4, name: 'Выполнение', completed: false, doing: false},
    {id: 5, name: 'Оценка руководителем', completed: false, doing: false},
    {id: 6, name: 'Оценка завершена', completed: false, doing: false}
  ])
  */
  const [token, setToken] = useState(localStorage.getItem('token'))
  console.log('localStorage', token)
  /*useEffect(() => {
    if (props.plan.role === 'Сотрудник')
      fetchPlan(object)
  }, [])*/
  
  /*if (token)*//*{*/
/*    if (props.plan.role === 'HR-сотрудник' || props.plan.role === 'Руководитель')*/
      /*return (
        <div className="plan">
          <div className="tasks">
            <div className="select">
              <SelectList/>
              <button className='addTask'/>
            </div>
            <Task/>
          </div>
          <div className="structurePlan">
            <MainInfo/>
          </div>
          {/!*<div className="board">
          <BeginThePlan/>
        </div>*!/}
        </div>
      )*/
    /*else if (props.plan.role === 'Сотрудник')*/
      return (
        <div className="plan">
          <div className="tasksEmployee">
            <Task/>
            <div className='addTaskEmployee'>
              <button className='addTask'/>
            </div>
            
          </div>
          <div className="structurePlan">
            <MainInfo/>
          </div>
        </div>
      )
/*  }*/
/*  else
    return <Redirect to="/" />*/
}

const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    plan: state.adaptationPlanReducer.plan,
  }
}
const mapDispatchToProps = (dispatch, object) => {
  return {
    fetchEmployees: () => dispatch(employeesFetchData()),
    fetchPlan: (object) => dispatch(planFetchData(object))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Plan)