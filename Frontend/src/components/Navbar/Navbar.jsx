import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.webp';
import './navbar.css';
import { logoutUser } from '../../actions/user.action';

const Navbar = () => {
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    dispatch(logoutUser());
    navigate('/');
  };

  if (token) {
    return (
      <nav className='main-nav'>
        <NavLink to='/' className='main-nav-logo'>
          <img src={logo} alt='Argent Bank Logo' className='main-nav-logo-image' />
          <h1 className='sr-only'>Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink to='/user-account' className='main-nav-item'>
            <i className='fa fa-user-circle'></i>
            Tony
          </NavLink>
          <NavLink to='/' className='main-nav-item' onClick={handleSignOut}>
            <i className='fa fa-sign-out'></i>
            Sign Out
          </NavLink>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className='main-nav'>
        <NavLink to='/' className='main-nav-logo'>
          <img src={logo} alt='Argent Bank Logo' className='main-nav-logo-image' />
          <h1 className='sr-only'>Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink to='/login' className='main-nav-item'>
            <i className='fa fa-user-circle'></i>
            Sign In
          </NavLink>
        </div>
      </nav>
    );
  }
};

export default Navbar;
