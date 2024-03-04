import axios from 'axios'; //Axios permet d' effectuer les requêtes au serveur 
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const LOGOUT_USER = "LOGOUT_USER";
export const USER_PROFILE = "USER_PROFILE";
export const UPDATE_USER_NAME = "UPDATE_USER_NAME";


// Action pour gérer la connexion réussie de l'utilisateur
export const userLoginSuccess = (token) => ({
  type: USER_LOGIN_SUCCESS,
  payload: token,
});

// Action pour gérer l'échec de connexion de l'utilisateur
export const userLoginFailure = (error) => ({
  type: USER_LOGIN_FAILURE,
  payload: error,
});

// Action pour déconnecter l'utilisateur
export const logoutUser = () => ({
  type: LOGOUT_USER,
});


// Action pour gérer la connexion de l'utilisateur


export const loginUser = (email, password, onSignInSuccess, rememberMe) => {
  return async (dispatch) => {
   
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        const token = response.data.body.token; // Extrait le token de la réponse du serveur
        if(rememberMe){
          localStorage.setItem('token', token);
        }
        dispatch(userLoginSuccess(token));  //dispatch action de loginsuccess, avec le token comme payload.
        onSignInSuccess();
      } 
    } catch (error) {
      dispatch(userLoginFailure('Identifiants incorrects'));
      localStorage.removeItem('token');
    }
  };
};


// Action pour récupérer le profil de l'utilisateur depuis le serveur

export const fetchUserProfile = () => {
  return async (dispatch, getState) => {
    const token = getState().user.token;
    if (!token) {
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/user/profile',
        {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);

      if (response.status === 200) {
        const userProfile = response.data.body;
        dispatch({
          type: USER_PROFILE,
          payload: userProfile,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
};




// Action pour mettre à jour le nom d'utilisateur

export const updateUserName = (userName) => {
  return async (dispatch, getState) => {
    const token = getState().user.token;
    if (!token) {
      return;
    }

    try {
      const response = await axios.put(
        'http://localhost:3001/api/v1/user/profile',
        { userName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);

      if (response.status === 200) {
        dispatch({
          type: UPDATE_USER_NAME,
          payload: userName,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
};