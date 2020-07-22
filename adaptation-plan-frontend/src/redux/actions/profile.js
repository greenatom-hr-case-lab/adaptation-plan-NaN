import axios from "axios";
import * as types from "./types"

// when loading
const fetchProfile = () => {
  return {
    type: types.FETCH_PROFILE_REQUEST
  }
}

//loaded success
const fetchProfileSuccess = profile => {
  return {
    type: types.FETCH_PROFILE_SUCCESS,
    payload: profile
  }
}

//get error
const fetchProfileFailure = error => {
  return {
    type: types.FETCH_PROFILE_FAILURE,
    payload: error
  }
}

//action creator where we got data from server
export function profileFetchData() {
  console.log("profileFetchData")
  return (dispatch) => {
    dispatch(fetchProfile()) //for loading
    axios /*https://localhost:3001/plan/*/
      .get(/*"https://localhost:3001/profile"*/"https://jsonplaceholder.typicode.com/users/1")
      .then(response => {
        console.log(response.data)
        /*setTimeout(() => {
          dispatch(fetchProfileSuccess(response.data))
        }, 2000)*/
        dispatch(fetchProfileSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchProfileFailure(error.message))
      });
  }
}
