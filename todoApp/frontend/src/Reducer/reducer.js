import { combineReducers } from 'redux'
import leadReducer from './leadReducer'
import msgReducer from './msgReducer'
import authReducer from './authReducer'
const rootReducer = combineReducers({
    lead:leadReducer,
    error:msgReducer,
    auth:authReducer
});

export default rootReducer;