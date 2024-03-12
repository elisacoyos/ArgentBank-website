import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, LOGOUT_USER, USER_PROFILE, UPDATE_USER_NAME } from '../actions/user.action';

const initialState = {
  token: null,
  loginError: null,
  userProfile: '',
};
function userReducer(state = initialState, action) {
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
        userProfile: '',
      };
    case USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    case UPDATE_USER_NAME:
      // eslint-disable-next-line no-case-declarations
      const newProfile = { ...state.userProfile, userName: action.payload };
      return {
        ...state,
        userProfile: newProfile,
      };
    default:
      return state;
  }
}

export default userReducer;