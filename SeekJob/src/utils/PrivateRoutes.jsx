import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";
const PrivateRoutes = () => {
  const { user } = useAuth();
  // const user = true;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
