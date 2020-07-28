import axios from 'axios'
import { FETCH_PLAN_EMPLOYEES_FAILURE, FETCH_PLAN_EMPLOYEES_REQUEST, FETCH_PLAN_EMPLOYEES_SUCCESS, FETCH_PLAN_HREMPLOYEES, FETCH_PLAN_LEADERS } from './types'

const fetchPlanEmployeesRequst = () => {
  return {
    type: FETCH_PLAN_EMPLOYEES_REQUEST,
  }
}

const fetchPlanEmployeesSuccess = employees => {
  return {
    type: FETCH_PLAN_EMPLOYEES_SUCCESS,
    payload: employees
  }
}

const fetchPlanEmployeesFailure = error => {
  return {
    type: FETCH_PLAN_EMPLOYEES_FAILURE,
    payload: error
  }
}

const fetchHREmployees = (hrEmployees) => {
  return {
    type: FETCH_PLAN_HREMPLOYEES,
    payload: hrEmployees
  }
}

const fetchLeaders = (leaders) => {
  return {
    type: FETCH_PLAN_LEADERS,
    payload: leaders
  }
}

export function employeesFetchData() {
  return (dispatch) => {
    dispatch(fetchPlanEmployeesRequst())
    axios
      .get(/*'/plan'*/)
      .then(response => dispatch(fetchPlanEmployeesSuccess(response.data)))
      .catch( error => dispatch(fetchPlanEmployeesFailure()))
  }
}

export function hrEmployeesFetchData() {
  return (dispatch) => {
    axios
      .get(/*'/plan/hremployeers'*/)
      .then(response => dispatch(fetchHREmployees(response.data)))
      .catch( error => console.log(error))
  }
}

export function leadersFetchData() {
  return (dispatch) => {
    axios
      .get(/*'/plan/leaders'*/)
      .then(response => dispatch(fetchLeaders(response.data)))
      .catch( error => console.log(error))
  }
}