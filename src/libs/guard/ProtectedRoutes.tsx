import { Outlet, Navigate } from "react-router-dom";
import { getLocalStorageItem } from "../utils";
import { type Profile } from "../../types/Profile";

const ProtectedRoutes = () => {
  const storedUser = getLocalStorageItem<Profile>("T_PROFILE");

  return storedUser ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
