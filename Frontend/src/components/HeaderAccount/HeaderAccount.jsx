import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../actions/user.action';
import './headerAccount.css';
import EditName from '../../components/EditName/EditName'

const HeaderAccount = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.userProfile);  //On déclare la variable userProfile pour accéder à la valeur de userProfile dans le reducer avec useSelector.
  const [isEditing, setIsEditing] = useState(false);   // État pour contrôler si le formulaire d'édition de nom est affiché ou non.

  useEffect(() => {
    dispatch(fetchUserProfile());  //Le useEffect assure que l'action fetchUserProfile() soit appelée juste après que le composant soit rendu et non avant.
  }, [dispatch]);

  return (
    <div className="header">
      {isEditing ? (
        <EditName setIsEditing={setIsEditing} />    //Si isEditing est vrai, on affiche EditName avec setIsEditing pour changer isEditing.
      ) : (
        <>
          <h1>Welcome back<br />{`${userProfile.firstName} ${userProfile.lastName}`} !</h1>
          <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Name</button>   
          <h2 className="sr-only">Accounts</h2>         
        </>                                      //quand on click sur le bouton, on change l'état de isEditing à true pour afficher EditName.                                            
      )}
    </div>
  );
};
export default HeaderAccount;