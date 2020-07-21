import {FETCH_PROFILE_REQUEST, FETCH_PROFILE_FAILURE, FETCH_PROFILE_SUCCESS} from '../actions/types'

const initialState = {
  loading: false,
  profile: '',
  error: ''
}

export const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PROFILE_REQUEST:
      console.log("FETCH_PROFILE_REQUEST")
      console.log(state)
      return {
        ...state,
        loading: true,
      }
    case FETCH_PROFILE_SUCCESS:
      console.log("FETCH_PROFILE_SUCCESS")
      console.log(state)
      return {
        loading: false,
        profile: action.payload,
        error: ''
      }
    case FETCH_PROFILE_FAILURE:
      console.log("FETCH_PROFILE_FAILURE")
      return {
        loading: false,
        profile: '',
        error: action.payload
      }
    default:
      return state
  }
}
