import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, LOGOUT_USER } from '../actions/user.action';

const initialState = {
  token: null,
  loginError: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        loginError: null,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        token: null,
        loginError: action.payload,
      };
      case LOGOUT_USER:
      return {
        ...state,
        token: null,
        loginError: null,
      };
    default:
      return state;
  }
};

export default userReducer;