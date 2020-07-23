import { combineReducers } from 'redux';
import { profileReducer } from './profileReducer';
import { authReducer } from './authReducer'

const rootReducer = combineReducers({
  profileReducer,
  authReducer
})

export default rootReducer;