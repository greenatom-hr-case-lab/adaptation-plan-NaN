import axios from 'axios'
import { FETCH_AUTH_FAILURE, FETCH_AUTH_SUCCESS, FETCH_AUTH_REQUEST } from "./types";

const fetchAuth = () => {
  return {
    type: FETCH_AUTH_REQUEST,
  }
}

const fetchAuthFailure = error => {
  return {
    type: FETCH_AUTH_FAILURE,
    payload: error,
  }
}

const fetchAuthSuccess = token => {
  return {
    type: FETCH_AUTH_SUCCESS,
    payload: token,
  }
}

export function authFetchData(object) {
  return (dispatch) => {
    dispatch(fetchAuth())
    axios.post("/signin", object)
      .then(response => {
        console.log(response.data)
        dispatch(fetchAuthSuccess(response.data))
      })
      .catch(error =>
        dispatch(fetchAuthFailure(error.message))
      )
  }
}