import axios from "axios";
import { FETCH_PLAN_FAILURE, FETCH_PLAN_REQUEST, FETCH_PLAN_SUCCESS } from "./types"

// when loading
const fetchPlanRequest = () => {
  return {
    type: FETCH_PLAN_REQUEST
  }
}

//loaded success
const fetchPlanSuccess = plan => {
  return {
    type: FETCH_PLAN_SUCCESS,
    payload: plan
  }
}

//get error
const fetchPlanFailure = error => {
  return {
    type: FETCH_PLAN_FAILURE,
    payload: error
  }
}

//action creator where we got data from server
export function planFetchData(object) {
  console.log("planFetchData")
  return (dispatch) => {
    dispatch(fetchPlanRequest()) //for loading
    axios
      .post(/*"https://localhost:3001/plan", object*/)
      .then(response => {
        console.log(response.data)
        /*setTimeout(() => {
          dispatch(fetchProfileSuccess(response.data))
        }, 2000)*/
        dispatch(fetchPlanSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchPlanFailure(error.message))
      });
  }
}
