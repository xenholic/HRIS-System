import { Navigate } from "react-router-dom";

export default function ProtectLandingPage() {
    
  let isLogin = localStorage.getItem("access_token");
  if (!isLogin) {
      return <Navigate to={"/login"} />;

  } else {
        return <Navigate to={"/"} />;
  }
//   return props.children;
}
