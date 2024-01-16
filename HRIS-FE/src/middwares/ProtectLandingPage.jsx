import { Navigate } from "react-router-dom";
import Home from "../pages/ChildrenProps";

export default function ProtectLandingPage() {
  let isLogin = localStorage.getItem("access_token");
  if (!isLogin) {
      return <Navigate to={"/login"} />;
  } 
  return <Home />;
}
