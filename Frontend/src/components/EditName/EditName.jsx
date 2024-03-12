import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserName } from '../../actions/user.action';
import './editName.css';

const EditName = ({ setIsEditing }) => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.userProfile);
  const [newUserName, setNewUserName] = useState('');


  // Fonction pour gérer la mise à jour du nom d'utilisateur.
  const handleUpdateUserName = async () => {
    // si newUserName a une valeur
    if (newUserName) {
      dispatch(updateUserName(newUserName));
      setIsEditing(false);    //on quitte le mode édition et réinitialisons la valeur de newUserName.
      setNewUserName('');
    }
  };
   
  //pour annuler l'édition
  const handleCancel = () => {
    setIsEditing(false);
    setNewUserName('');
  };

  return (
    <div className="edit-form">
      <h2>Edit User Name</h2>
      <div>
        <label htmlFor="newUserName">User Name :</label>
        <input
          type="text"
          id="newUserName"
          placeholder={userProfile.userName}
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="firstName">First Name :</label>
        <input
          type="text"
          id="firstName"
          value={userProfile.firstName}
          disabled
          className='text_input'
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name :</label>
        <input
          type="text"
          id="lastName"
          value={userProfile.lastName}
          disabled
          className='text_input'
        />
        <div className="buttons-form">
          <button onClick={handleUpdateUserName}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>

  );
};

export default EditName;