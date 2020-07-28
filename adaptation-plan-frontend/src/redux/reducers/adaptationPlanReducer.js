import {
  FETCH_PLAN_REQUEST,
  FETCH_PLAN_FAILURE,
  FETCH_PLAN_SUCCESS,
  FETCH_BEGIN_PLAN,
  FETCH_UPDATE_HREMPLOYEE,
  FETCH_UPDATE_LEADER,
  FETCH_UPDATE_RATING,
  FETCH_UPDATE_ADAPTATION_START,
  FETCH_UPDATE_ADAPTATION_END,
  FETCH_ADD_TASK,
  FETCH_DELETE_TASK
} from '../actions/types'

const initialState = {
  loading: false,
  plan: '',
  error: ''
}

export const adaptationPlanReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PLAN_REQUEST:
      console.log("FETCH_PLAN_REQUEST")
      console.log(state)
      return {
        ...state,
        loading: true,
      }
    case FETCH_PLAN_SUCCESS:
      console.log("FETCH_PLAN_SUCCESS")
      console.log(state)
      return {
        ...state,
        loading: false,
        plan: action.payload,
      }
    case FETCH_PLAN_FAILURE:
      console.log("FETCH_PLAN_FAILURE")
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case FETCH_BEGIN_PLAN:
      console.log("FETCH_BEGIN_PLAN")
      return {
        ...state,
        plan: action.payload
      }
    case FETCH_UPDATE_HREMPLOYEE:
      console.log("FETCH_UPDATE_HREMPLOYEE")
      return {
        ...state,
        plan: action.payload
      }
    case FETCH_UPDATE_LEADER:
      console.log("FETCH_UPDATE_LEADER")
      return {
        ...state,
        plan: action.payload
      }
    case FETCH_UPDATE_RATING:
      console.log("FETCH_UPDATE_RATING")
      return {
        ...state,
        plan: action.payload
      }
    case FETCH_UPDATE_ADAPTATION_START:
      console.log("FETCH_UPDATE_ADAPTATION_START")
      return {
        ...state,
        plan: action.payload
      }
    case FETCH_UPDATE_ADAPTATION_END:
      console.log("FETCH_UPDATE_ADAPTATION_END")
      return {
        ...state,
        plan: action.payload
      }
    case FETCH_ADD_TASK:
      console.log("FETCH_ADD_TASK")
      return {
        ...state,
        plan: action.payload
      }
    case FETCH_DELETE_TASK:
      console.log("FETCH_DELETE_TASK")
      return {
        ...state,
        plan: action.payload
      }
    default:
      return state
  }
}
