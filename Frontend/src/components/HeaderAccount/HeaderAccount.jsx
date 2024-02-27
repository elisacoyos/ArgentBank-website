import React from 'react';
import './headerAccount.css'

const HeaderAccount = ({ name }) => {
  return (
    <div className="header">
      <h1>Welcome back<br />{name}!</h1>
      <button className="edit-button">Edit Name</button>
      <h2 className="sr-only">Accounts</h2>
    </div>
  );
};

export default HeaderAccount;