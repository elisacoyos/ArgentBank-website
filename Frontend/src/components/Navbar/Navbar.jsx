import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.webp';
import './navbar.css';
import { logoutUser } from '../../actions/user.action';
import { fetchUserProfile } from '../../actions/user.action';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUserCircle} from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const token = useSelector((state) => state.user.token);
  const userProfile = useSelector((state) => state.user.userProfile);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    dispatch(logoutUser());
    navigate('/');
  };

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);


  if (token) {
    return (
      <nav className='main-nav'>
        <NavLink to='/' className='main-nav-logo'>
          <img src={logo} alt='Argent Bank Logo' className='main-nav-logo-image' />
          <h1 className='sr-only'>Argent Bank</h1>
        </NavLink>
        <div className='navbar_loginSuccess'>
          <NavLink to='/user' className='main-nav-item'>
          <FontAwesomeIcon icon={faUserCircle} className="icon-navbar"/>
            {userProfile.userName}
          </NavLink>
          <NavLink to='/' className='main-nav-item' onClick={handleSignOut}>
          <FontAwesomeIcon icon={faSignOutAlt} />
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
          <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </NavLink>
        </div>
      </nav>
    );
  }
};

export default Navbar;
