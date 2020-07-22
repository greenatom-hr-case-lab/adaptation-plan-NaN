import {FETCH_PLAN_REQUEST, FETCH_PLAN_FAILURE, FETCH_PLAN_SUCCESS} from '../actions/types'

const initialState = {
  loading: false,
  plan: '',
  error: ''
}

export const profileReducer = (state = initialState, action) => {
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
        loading: false,
        plan: action.payload,
        error: ''
      }
    case FETCH_PLAN_FAILURE:
      console.log("FETCH_PLAN_FAILURE")
      return {
        loading: false,
        plan: '',
        error: action.payload
      }
    default:
      return state
  }
}
