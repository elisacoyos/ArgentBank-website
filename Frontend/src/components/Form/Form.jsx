import React, { useState } from 'react';
import './form.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../actions/user.action';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();    //la fonction 'dispatch' pour envoyer des actions au store de Redux
  const loginError = useSelector((state) => state.user.loginError); //Le hook useSelector permet d'accéder à la propriété loginError et de mettre à jour automatiquement si son état a changé.
  const navigate = useNavigate(); //permet de rediriger l'utilisateur
  
  const handleSignInSucces = () => {
    navigate('/user');
  }

  // gere l'authentification de l'utilisateur
  const handleSignIn = (e) => {
    e.preventDefault();    // Empêche le rechargement de la page lors de l'envoi du formulaire.
    dispatch(loginUser(email, password, handleSignInSucces, rememberMe));    //L'action loginUser est dispatchée quand le formulaire est envoyé.
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>           
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-remember">
            <input checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
          <button className="sign-in-button" type="submit">Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default Form;
