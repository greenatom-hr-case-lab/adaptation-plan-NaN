import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import {Redirect} from "react-router-dom";
import './Plan.css';
import SelectList from "../SelectList";
import Stage from "./Stage";
import {employeesFetchData} from "../../../../redux/actions/employeesPlan";
import {planFetchData, addTask} from "../../../../redux/actions/adaptationPlan";

import BeginThePlan from "./BeginThePlan";
import MainInfo from "./MainInfo";
import Task from "./Task";

function Plan(props) {

  const [token, setToken] = useState(localStorage.getItem('token'))
  console.log('localStorage', token)
  
  const addTask = () => {
    props.fetchTask()
  }
  
  /*useEffect(() => {
    if (props.role === 'Сотрудник')
      fetchPlan(object)
  }, [])*/
  
//  ------------------------------------------------------------
  /*if (token){*/
  if (props.role === 'HR-сотрудник')
    return (
      <div className="plan">
        <div className="tasks">
          <div className="select">
            <SelectList/>
            {(props.plan.stage === 'Согласование руководителем' && props.plan.stage === 'Выполнение') && <button className='addTask' onClick={addTask}/>}
            {(props.plan.stage === 'Начало') && <div className="board"><BeginThePlan/></div>}
          </div>
          {props.plan.tasks ? props.plan.tasks.forEach( (task, index) => {
            return <Task task={task} key={index}/>
          }) : null}
        </div>
        {(props.plan.stage !== 'Начало' && props.plan.stage !== undefined) && <div className="structurePlan"><MainInfo/></div>}
      </div>
    )
  if (props.role === 'Руководитель')
    return (
      <div className="plan">
        <div className="tasks">
          <div className="select">
            <SelectList/>
            { props.plan.stage === 'Согласование руководителем' && <button className='addTask' onClick={addTask}/> }
            {(props.plan.stage === 'Начало') && <div>План еще не создан сотрудником кадровой службы!</div>}
          </div>
          {props.plan.tasks ? props.plan.tasks.forEach( (task, index) => {
            return <Task task={task} key={index} disabled={false}/>
          }) : null}
        </div>
        {(props.plan.stage !== 'Начало' && props.plan.stage !== undefined) && <div className="structurePlan"><MainInfo/></div>}
      </div>
    )
  if (props.role === 'Сотрудник')
    return (
      <div className="plan">
        <div className="tasksEmployee">
          {props.plan.tasks ? props.plan.tasks.forEach( (task, index) => {
            return <Task task={task} key={index} index={index+1}/>
          }) : null}
          {(props.plan.stage === 'Начало') && <div>План еще не создан сотрудником кадровой службы!</div>}
          {(props.plan.stage === 'Заполнение сотрудником' && props.plan.stage === 'Выполнение') &&
          (<div className='addTaskEmployee'>
            <button className='addTask' onClick={addTask}/>
          </div>)}
        </div>
        {(props.plan.stage !== 'Начало' && props.plan.stage !== undefined) && <div className="structurePlan"><MainInfo/></div>}
      </div>
    )
/*}
else
return <Redirect to="/" />*/
}

const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    plan: state.adaptationPlanReducer.plan,
    role: state.authReducer.role
  }
}
const mapDispatchToProps = (dispatch, object) => {
  return {
    fetchEmployees: () => dispatch(employeesFetchData()),
    fetchPlan: (object) => dispatch(planFetchData(object)),
    fetchTask: () => dispatch(addTask())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Plan)