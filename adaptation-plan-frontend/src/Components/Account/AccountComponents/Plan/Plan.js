import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import './Plan.css';
import SelectList from "../SelectList";
import Stage from "./Stage";
import {employeesFetchData} from "../../../../redux/actions/employeesPlan";
import {planFetchData} from "../../../../redux/actions/adaptationPlan";
import {Redirect} from "react-router-dom";

function Plan(props) {
  const [stage, setStage] = useState([
    {id: 1, name: 'Создание плана', completed: true , doing: false},
    {id: 2, name: 'Заполнение сотрудником', completed: true, doing: false},
    {id: 3, name: 'Согласование руководителем', completed: false, doing: true},
    {id: 4, name: 'Выполнение', completed: false, doing: false},
    {id: 5, name: 'Оценка руководителем', completed: false, doing: false},
    {id: 6, name: 'Оценка завершена', completed: false, doing: false}
  ])
  
  /*useEffect(() => {
    props.fetchPlan(object)
  }, [])*/
  
  function updateStage(id){
    setStage(
      stage.map(stage => {
        stage.id === id ? stage.doing = true : stage.doing = false;
        return stage;
      })
    )
  }
  
  if (props.token)
    return (
      <div className="plan">
        <div className="select">
          <SelectList/>
        </div>
        <div className="buttonsList"> {/* here we got all our stages*/}
          { stage.map(stage => {
            return <Stage stage={stage} key={stage.id} updateStage={updateStage}/>
          }) }
        </div>
      </div>
    )
  else
    return <Redirect to="/" />
}

const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    plan: state.adaptationPlanReducer.plan,
    employees: state.employeesPlanReducer.employees
  }
}
const mapDispatchToProps = (dispatch, object) => {
  return {
    fetchEmployees: () => dispatch(employeesFetchData()),
    fetchPlan: (object) => dispatch(planFetchData(object))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Plan)