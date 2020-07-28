import {
  FETCH_PLAN_EMPLOYEES_FAILURE,
  FETCH_PLAN_EMPLOYEES_REQUEST,
  FETCH_PLAN_EMPLOYEES_SUCCESS,
  FETCH_PLAN_HREMPLOYEES,
  FETCH_PLAN_LEADERS
} from '../actions/types'

const initialState = {
  loading: false,
  employees: '',
  error: '',
  leaders: '',
  hrEmployees: ''
}

export const employeesPlanReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAN_EMPLOYEES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_PLAN_EMPLOYEES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case FETCH_PLAN_EMPLOYEES_SUCCESS:
      return {
        ...state,
        loading: false,
        employees: action.payload
      }
    case FETCH_PLAN_HREMPLOYEES:
      return {
        ...state,
        hrEmployees: action.payload
      }
    case FETCH_PLAN_LEADERS:
      return {
        ...state,
        leaders: action.payload
      }
    default:
      return state
  }
}