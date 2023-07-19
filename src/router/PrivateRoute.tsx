import React, { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hook/hook";

interface IProps {
  children: ReactNode;
}
const PrivateRoute = ({ children }: IProps) => {
  const { user } = useAppSelector((state) => state.auth);
  const location = useLocation();
  const { pathname } = useLocation();

  // if(lodaing){
  //       return <Loading></Loading>
  // }

  if (!user) {
    return <Navigate to="/singIn" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
