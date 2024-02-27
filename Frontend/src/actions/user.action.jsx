import axios from 'axios';

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const userLoginSuccess = (token) => ({
  type: USER_LOGIN_SUCCESS,
  payload: token,
});

export const userLoginFailure = (error) => ({
  type: USER_LOGIN_FAILURE,
  payload: error,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const loginUser = (email, password, navigate) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_USER }); 

    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', {
        email: email,
        password: password,
      });

      console.log(response);

      if (response.status === 200) {
        const token = response.data.body.token; 
        localStorage.setItem('token', token);
        dispatch(userLoginSuccess(token));
        navigate('/user');
      } else {
        dispatch(userLoginFailure('Échec de la connexion'));
        localStorage.removeItem('token');
      }
    } catch (error) {
      dispatch(userLoginFailure('identifiants incorrects'));
      localStorage.removeItem('token');
    }
  };
};