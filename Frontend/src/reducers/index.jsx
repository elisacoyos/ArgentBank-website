import { combineReducers } from "redux";
import userReducer from './user.reducer'

// eslint-disable-next-line react-refresh/only-export-components
export default combineReducers({
  user: userReducer,
});