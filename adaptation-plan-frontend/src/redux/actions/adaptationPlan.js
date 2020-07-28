import axios from "axios";
import {
  FETCH_PLAN_FAILURE,
  FETCH_PLAN_REQUEST,
  FETCH_PLAN_SUCCESS,
  FETCH_BEGIN_PLAN,
  FETCH_UPDATE_LEADER,
  FETCH_UPDATE_HREMPLOYEE,
  FETCH_UPDATE_RATING,
  FETCH_UPDATE_ADAPTATION_START,
  FETCH_UPDATE_ADAPTATION_END,
  FETCH_ADD_TASK,
  FETCH_DELETE_TASK
} from "./types"

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

const fetchBeginPlan = plan => {
  return {
    type: FETCH_BEGIN_PLAN,
    payload: plan
  }
}

const fetchUpdateLeader = plan => {
  return {
    type: FETCH_UPDATE_LEADER,
    payload: plan
  }
}

const fetchUpdateHREmployee = plan => {
  return {
    type: FETCH_UPDATE_HREMPLOYEE,
    payload: plan
  }
}

const fetchUpdateRating = plan => {
  return {
    type: FETCH_UPDATE_RATING,
    payload: plan
  }
}

const fetchUpdateAdaptationStart = plan => {
  return {
    type: FETCH_UPDATE_ADAPTATION_START,
    payload: plan
  }
}

const fetchUpdateAdaptationEnd = plan => {
  return {
    type: FETCH_UPDATE_ADAPTATION_END,
    payload: plan
  }
}

const fetchAddTask = plan => {
  return {
    type: FETCH_ADD_TASK,
    payload: plan
  }
}

const fetchDeleteTask = plan => {
  return {
    type: FETCH_DELETE_TASK,
    payload: plan
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

export function beginPlan(object) {
  return (dispatch) => {
    axios.post(/*"https://localhost:3001/plan/stage", object*/)
      .then(response => {
        console.log(response.data)
        dispatch(fetchBeginPlan(response.data))
      })
  }
}

export function updateHREmployee(object) {
  return (dispatch) => {
    axios.post(/*"https://localhost:3001/plan/hremployee", object*/)
      .then(response => {
        console.log(response.data)
        dispatch(fetchUpdateHREmployee(response.data))
      })
  }
}

export function updateLeader(object) {
  return (dispatch) => {
    axios.post(/*"https://localhost:3001/plan/leader", object*/)
      .then(response => {
        console.log(response.data)
        dispatch(fetchUpdateLeader(response.data))
      })
  }
}

export function updateRating(object) {
  return (dispatch) => {
    axios.post(/*"https://localhost:3001/plan/rating", object*/)
      .then(response => {
        console.log(response.data)
        dispatch(fetchUpdateRating(response.data))
      })
  }
}

export function updateAdaptationStart(object) {
  return (dispatch) => {
    axios.post(/*"https://localhost:3001/plan/adaptationstart", object*/)
      .then(response => {
        console.log(response.data)
        dispatch(fetchUpdateAdaptationStart(response.data))
      })
  }
}

export function updateAdaptationEnd(object) {
  return (dispatch) => {
    axios.post(/*"https://localhost:3001/plan/adaptationend", object*/)
      .then(response => {
        console.log(response.data)
        dispatch(fetchUpdateAdaptationEnd(response.data))
      })
  }
}

export function addTask() {
  return (dispatch) => {
    axios.get(/*"https://localhost:3001/plan/addtask"*/)
      .then(response => {
        console.log(response.data)
        dispatch(fetchAddTask(response.data))
      })
  }
}

export function deleteTask(object) {
  return (dispatch) => {
    axios.post(/*"https://localhost:3001/plan/deletetask", object*/)
      .then(response => {
        console.log(response.data)
        dispatch(fetchDeleteTask(response.data))
      })
  }
}
