import axios from 'axios'
import { FETCH_PLAN_EMPLOYEES_FAILURE, FETCH_PLAN_EMPLOYEES_REQUEST, FETCH_PLAN_EMPLOYEES_SUCCESS } from './types'

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

export function employeesFetchData(object) {
  return (dispatch) => {
    dispatch(fetchPlanEmployeesRequst())
    axios
      .post('', object)
      .then(response => dispatch(fetchPlanEmployeesSuccess(response.data)))
      .catch( error => dispatch(fetchPlanEmployeesFailure()))
  }
}