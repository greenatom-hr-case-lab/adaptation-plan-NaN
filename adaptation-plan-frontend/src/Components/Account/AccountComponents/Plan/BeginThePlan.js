import React, {useState} from 'react';
import './BeginThePlan.css'
import {connect} from "react-redux";
import {beginPlan} from "../../../../redux/actions/adaptationPlan";

function BeginThePlan(props) {
  const date = new Date()
  const createPlan = () => {
    props.beginPlan({stage: 'Создание плана', dateCreate: date.toLocaleDateString()})
  }
  return (
    <div className="newPlan">
      <p className="offer">Создайте план адаптации для нового сотрудника!</p>
      <button className="createPlan" onClick={createPlan}>Создать план</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    plan: state.adaptationPlanReducer.plan
  }
}
const mapDispatchToProps = (dispatch, object) => {
  return {
    beginPlan: (object) => dispatch(beginPlan(object))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeginThePlan)