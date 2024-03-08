import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoginSuccess } from "../actions/user.action";

function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const localStorageToken = localStorage.getItem("token");
console.log ('token', token)
  if (token || (!token && localStorageToken)) {
    !token && dispatch(userLoginSuccess(localStorageToken));
    return children;
  }
  return <Navigate to="/login" />;
}

export default ProtectedRoute;
