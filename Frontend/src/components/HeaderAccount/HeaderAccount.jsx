import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../actions/user.action';
import './headerAccount.css';
import EditName from '../../components/EditName/EditName'

const HeaderAccount = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.userProfile);
  const [isEditing, setIsEditing] = useState(false); 

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  return (
    <div className="header">
      {isEditing ? (
        <EditName setIsEditing={setIsEditing} /> 
      ) : (
        <>
          <h1>Welcome back<br />{userProfile.userName} !</h1>
          <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Name</button>
          <h2 className="sr-only">Accounts</h2>
        </>
      )}
    </div>
  );
};
export default HeaderAccount;