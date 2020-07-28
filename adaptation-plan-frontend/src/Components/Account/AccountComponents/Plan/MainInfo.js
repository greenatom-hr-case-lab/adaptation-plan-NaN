import React, {useEffect, useState} from 'react';
import './MainInfo.css'
import TextField from "../TextField";
import CalendarField from "../CalendarField";
import SelectField from "../SelectField";
import Stage from "./Stage";
import {hrEmployeesFetchData, leadersFetchData} from "../../../../redux/actions/employeesPlan";
import {connect} from "react-redux";
import {
  updateLeader,
  updateHREmployee,
  updateRating,
  updateAdaptationStart,
  updateAdaptationEnd
} from "../../../../redux/actions/adaptationPlan";

function MainInfo(props) {
  const date = new Date()
  const [field, setField] = useState([
    {id: 1, name: 'Должность', disabled: true},
    {id: 2, name: 'Руководитель', disabled: true},
    {id: 3, name: 'Начало', disabled: true},
    {id: 4, name: 'Конец', disabled: true},
    {id: 5, name: 'HR-сотрудник', disabled: true},
    {id: 6, name: 'Оценка', disabled: true}
  ])
  
  const [stage, setStage] = useState([
    {id: 1, name: 'Создание плана', completed: true , doing: false},
    {id: 2, name: 'Заполнение сотрудником', completed: true, doing: false},
    {id: 3, name: 'Согласование руководителем', completed: false, doing: true},
    {id: 4, name: 'Выполнение', completed: false, doing: false},
    {id: 5, name: 'Оценка руководителем', completed: false, doing: false},
    {id: 6, name: 'Оценка завершена', completed: false, doing: false}
  ])
  
  const rating = [
    {id: 1, label: 'A. Исключительно высокий уровень эффективности', value: 1},
    {id: 2, label: 'B. Высокий уровень эффективности', value: 2},
    {id: 3, label: 'C. Уровень соответствия занимаемой должности', value: 3},
    {id: 4, label: 'D. Уровень эффективности ниже стандартного', value: 4},
    {id: 5, label: 'E. Неудовлетворительный уровень эффективности', value: 5}
  ]
  
  const updateLeader = (leader) => {
    props.postLeader(leader)
  }
  
  const updatehrEmployee = (hrEmployee) => {
    props.posthrEmployee(hrEmployee)
  }
  
  const updateRating = (rating) => {
    props.postRating(rating)
  }
  
  const updateAdaptationStart = (value) => {
    props.postAdaptationStart(value)
  }
  
  const updateAdaptationEnd = (value) => {
    props.postAdaptationEnd(value)
  }
  
  useEffect(() => {
    props.gethrEmployees()
    props.getLeaders()
  }, [])
  return (
    <div className="mainInfo">
      <p>Дата создания плана: {props.plan.dateCreate}</p>
      <TextField title={field[0]} disabled={ (props.role !== 'HR-сотрудник') } value={props.plan.position ? props.plan.position : ''}/>
      <SelectField title={field[1]} disabled={ (props.role !== 'HR-сотрудник') } options={props.leaders} update={updateLeader} value={props.plan.directiorEmployee ? props.plan.directiorEmployee : ''}/>
      <CalendarField title={field[2]} disabled={ (props.role !== 'HR-сотрудник') } update={updateAdaptationStart} value={props.plan.adaptationPeriodStart ? props.plan.adaptationPeriodStart : ''}/>
      <CalendarField title={field[3]} disabled={ (props.role !== 'HR-сотрудник') } update={updateAdaptationEnd} value={props.plan.adaptationPeriodEnd ? props.plan.adaptationPeriodEnd : ''}/>
      <SelectField title={field[4]} disabled={ (props.role !== 'HR-сотрудник') } options={props.hrEmployees} update={updatehrEmployee} value={props.plan.hrEmployee ? props.plan.hrEmployee : ''}/>
      <SelectField title={field[5]} disabled={ (props.role !== 'HR-сотрудник') } options={rating} update={updateRating} value={props.plan.mark ? props.plan.mark : ''}/>
      <div className="buttonsList">
        { stage.map(stage => {
          return <Stage stage={stage} key={stage.id}/>
        }) }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    plan: state.adaptationPlanReducer.plan,
    leaders: state.employeesPlanReducer.leaders,
    hrEmployees: state.employeesPlanReducer.hrEmployees,
    role: state.authReducer.role
  }
}
const mapDispatchToProps = (dispatch, object) => {
  return {
    gethrEmployees: () => dispatch(hrEmployeesFetchData()),
    getLeaders: () => dispatch(leadersFetchData()),
    posthrEmployee: (object) => dispatch(updateHREmployee(object)),
    postLeader: (object) => dispatch(updateLeader(object)),
    postRating: (object) => dispatch(updateRating(object)),
    postAdaptationStart: (object) => dispatch(updateAdaptationStart(object)),
    postAdaptationEnd: (object) => dispatch(updateAdaptationEnd(object))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainInfo)